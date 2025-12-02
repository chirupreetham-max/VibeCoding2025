// Game State
let currentQuestion = { a: 0, b: 0, ans: 0 };
let score = { correct: 0, incorrect: 0, history: [] }; // Added history array
let state = 'answering'; // 'answering' or 'result'
let isSpeaking = false; // Flag to prevent multiple concurrent TTS requests
let currentOperation = 'add'; // 'add', 'sub', 'mul', 'div'

// Positive feedback messages
const positiveMessages = [
    "EXCELLENT! 🌟", 
    "MARVELOUS! 👏", 
    "GOOD JOB! 👍", 
    "AWESOME! 🎉",
    "PERFECT! 🧠",
    "YOU GOT IT! 💯"
];

// DOM Elements
const elFactorA = document.getElementById('factor-a');
const elFactorB = document.getElementById('factor-b');
const elInput = document.getElementById('answer-input');
const elBtn = document.getElementById('action-btn');
const elScoreCorrect = document.getElementById('score-correct');
const elScoreIncorrect = document.getElementById('score-incorrect');
const elFeedback = document.querySelector('#feedback p');
const elHistoryLog = document.getElementById('history-log');
const elOperatorDisplay = document.getElementById('operator-display');

// Confetti Canvas
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let confettiParticles = [];

// --- TTS Utility Functions ---

const AUDIO_SAMPLE_RATE = 24000; // Common sample rate for TTS API
const AUDIO_CHANNELS = 1;

function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

function pcmToWav(pcm16, sampleRate) {
    const numChannels = AUDIO_CHANNELS;
    const numSamples = pcm16.length;
    const bytesPerSample = 2; // Int16Array (16-bit PCM)
    const byteRate = numChannels * sampleRate * bytesPerSample;
    const blockAlign = numChannels * bytesPerSample;

    const buffer = new ArrayBuffer(44 + numSamples * bytesPerSample);
    const view = new DataView(buffer);
    let offset = 0;

    // RIFF chunk
    view.setUint32(offset, 0x52494646, false); // "RIFF"
    offset += 4;
    view.setUint32(offset, 36 + numSamples * bytesPerSample, true); // ChunkSize
    offset += 4;
    view.setUint32(offset, 0x57415645, false); // "WAVE"
    offset += 4;

    // FMT chunk
    view.setUint32(offset, 0x666d7420, false); // "fmt "
    offset += 4;
    view.setUint32(offset, 16, true); // Subchunk1Size (16 for PCM)
    offset += 4;
    view.setUint16(offset, 1, true); // AudioFormat (1 for PCM)
    offset += 2;
    view.setUint16(offset, numChannels, true); // NumChannels
    offset += 2;
    view.setUint32(offset, sampleRate, true); // SampleRate
    offset += 4;
    view.setUint32(offset, byteRate, true); // ByteRate
    offset += 4;
    view.setUint16(offset, blockAlign, true); // BlockAlign
    offset += 2;
    view.setUint16(offset, bytesPerSample * 8, true); // BitsPerSample (16)
    offset += 2;

    // DATA chunk
    view.setUint32(offset, 0x64617461, false); // "data"
    offset += 4;
    view.setUint32(offset, numSamples * bytesPerSample, true); // Subchunk2Size
    offset += 4;

    // Write PCM data
    for (let i = 0; i < numSamples; i++) {
        view.setInt16(offset, pcm16[i], true);
        offset += 2;
    }

    return new Blob([buffer], { type: 'audio/wav' });
}

async function speakText(text) {
    // Block simultaneous TTS requests
    if (isSpeaking) return;
    isSpeaking = true;
    elBtn.classList.add('loading');

    const apiKey = "";
    
    // CRITICAL FIX: If API key is missing, immediately release the lock and exit.
    if (!apiKey || apiKey === "") {
        console.error("TTS failed: API key is missing. Skipping audio.");
        isSpeaking = false;
        elBtn.classList.remove('loading');
        return;
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [{ text: text }]
        }],
        generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: "Kore" }
                }
            }
        },
    };

    const maxRetries = 3;
    let delay = 1000;

    try {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`API returned status ${response.status}`);
                }

                const result = await response.json();
                const part = result?.candidates?.[0]?.content?.parts?.[0];
                const audioData = part?.inlineData?.data;

                if (audioData) {
                    const pcmData = base64ToArrayBuffer(audioData);
                    const pcm16 = new Int16Array(pcmData);
                    const wavBlob = pcmToWav(pcm16, AUDIO_SAMPLE_RATE);
                    const audioUrl = URL.createObjectURL(wavBlob);
                    
                    const audio = new Audio(audioUrl);
                    
                    // Start playing audio in the background and move on immediately.
                    audio.play().catch(e => console.error("Audio playback failed:", e));
                    
                    URL.revokeObjectURL(audioUrl); // Clean up the URL
                    return; // Success, exit function
                } else {
                    throw new Error("No audio data found in response.");
                }
            } catch (error) {
                console.error(`TTS attempt ${attempt + 1} failed:`, error);
                if (attempt < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                } else {
                    throw new Error("Maximum TTS retries reached.");
                }
            }
        }
    } catch (finalError) {
        console.error("TTS final failure:", finalError);
        // Do not throw an error, just let the rest of the game continue
    } finally {
        // IMPORTANT: Release the lock and hide spinner immediately after the call returns (or fails)
        isSpeaking = false;
        elBtn.classList.remove('loading');
    }
}
// --- End TTS Utility Functions ---


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function generateQuestion() {
    // Factor 'a' (Table Number): Random number from 2 to 11 (inclusive).
    let a, b, ans;
    
    if (currentOperation === 'add') {
        a = Math.floor(Math.random() * 50) + 1;
        b = Math.floor(Math.random() * 50) + 1;
        ans = a + b;
    } else if (currentOperation === 'sub') {
        a = Math.floor(Math.random() * 50) + 1;
        b = Math.floor(Math.random() * 50) + 1;
        if (b > a) [a, b] = [b, a]; // Ensure a >= b for positive results
        ans = a - b;
    } else if (currentOperation === 'mul') {
        a = Math.floor(Math.random() * 10) + 2; 
        b = Math.floor(Math.random() * 10) + 1;
        ans = a * b;
    } else if (currentOperation === 'div') {
        b = Math.floor(Math.random() * 10) + 1;
        ans = Math.floor(Math.random() * 12) + 1; // Answer from 1 to 12
        a = ans * b; // Ensure clean division
    }
    
    currentQuestion = { a, b, ans };
    
    elFactorA.textContent = a;
    elFactorB.textContent = b;
    
    // Update operator symbol
    const opSymbol = {
        'add': '+',
        'sub': '−',
        'mul': '×',
        'div': '÷'
    }[currentOperation];
    
    elOperatorDisplay.textContent = opSymbol;
    
    // Reset UI for new question
    state = 'answering';
    elInput.value = '';
    elInput.disabled = false;
    elInput.focus();
    
    elBtn.innerHTML = 'CHECK <span class="spinner"></span>';
    elBtn.className = "w-full py-5 rounded-2xl text-3xl font-black text-white shadow-lg transform active:scale-95 transition-all bg-indigo-500 hover:bg-indigo-600";
    
    elFeedback.className = "text-2xl font-bold text-center hidden";
    
    // TTS removed from here per user request
}

function handleAction() {
    // Check if user is in 'answering' state or ready to move 'next'
    if (state === 'answering') {
        checkAnswer();
    } else if (state === 'result') {
        // State is 'result', user can click for next question immediately.
        generateQuestion();
    }
    
    // Note: The isSpeaking check was removed from here because the button only locks if isSpeaking is true *after* the TTS API call starts, which is now released immediately in the finally block.
}

function checkAnswer() {
    const userVal = parseInt(elInput.value);
    
    if (isNaN(userVal)) {
        // Shake animation for empty input
        elInput.classList.add('border-red-500', 'bg-red-50');
        setTimeout(() => elInput.classList.remove('border-red-500', 'bg-red-50'), 500);
        return;
    }

    state = 'result';
    elInput.disabled = true;
    
    const isCorrect = (userVal === currentQuestion.ans); // Determine correctness
    
    // History object
    const historyEntry = {
        a: currentQuestion.a,
        b: currentQuestion.b,
        user: userVal,
        correct: currentQuestion.ans,
        isCorrect: isCorrect,
    };
    score.history.push(historyEntry);
    
    let messageToSpeak;


    if (isCorrect) {
        // Correct
        score.correct++;
        elScoreCorrect.textContent = score.correct;
        
        // UI Success - Randomly select a positive message
        const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
        elFeedback.textContent = randomMessage;
        messageToSpeak = randomMessage.replace(/[\!🌟👏👍🎉🧠💯]/g, ''); // Remove emojis for speech

        elFeedback.className = "text-3xl font-black text-center text-green-600 pop-in block";
        
        elBtn.textContent = "NEXT QUESTION";
        elBtn.className = "w-full py-5 rounded-2xl text-3xl font-black text-white shadow-lg transform active:scale-95 transition-all bg-green-500 hover:bg-green-600";
        
        triggerConfetti();
    } else {
        // Incorrect
        score.incorrect++;
        elScoreIncorrect.textContent = score.incorrect;

        // UI Fail
        elFeedback.innerHTML = `Oops! It was <span class="text-4xl text-black">${currentQuestion.ans}</span>`;
        messageToSpeak = `Oops! The correct answer is ${currentQuestion.ans}.`;

        elFeedback.className = "text-2xl font-bold text-center text-red-500 pop-in block";
        
        elBtn.textContent = "TRY NEXT";
        elBtn.className = "w-full py-5 rounded-2xl text-3xl font-black text-white shadow-lg transform active:scale-95 transition-all bg-red-500 hover:bg-red-600";
    }
    
    renderHistory();
    speakText(messageToSpeak);
}

function renderHistory() {
    // Clear existing history, keeping the title
    elHistoryLog.innerHTML = '<h3 class="text-lg font-bold text-gray-700">Past Attempts:</h3>'; 
    
    // Iterate over the history array in reverse to show newest first
    score.history.slice().reverse().forEach(entry => {
        const resultClass = entry.isCorrect ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400';
        const icon = entry.isCorrect ? '✅' : '❌';
        
        const historyItem = document.createElement('div');
        historyItem.className = `p-3 rounded-xl flex justify-between items-center text-sm font-medium border ${resultClass}`;
        
        // Format: 5 x 6 = 30 (Your answer: 32)
        const text = `${entry.a} &times; ${entry.b} = ${entry.correct}`;
        const userText = entry.isCorrect ? '' : ` (You answered: ${entry.user})`;

        historyItem.innerHTML = `
            <div class="flex items-center space-x-2">
                <span>${icon}</span>
                <span>${text}</span>
                <span class="font-normal text-gray-600">${userText}</span>
            </div>
        `;
        
        elHistoryLog.appendChild(historyItem);
    });
}


function resetScore() {
    // Do not block score reset based on TTS status
    
    // Reset score and history without a confirmation dialog
    score = { correct: 0, incorrect: 0, history: [] };
    elScoreCorrect.textContent = 0;
    elScoreIncorrect.textContent = 0;
    renderHistory(); // Clear the visual log

    // Show reset confirmation message briefly in the feedback area
    elFeedback.textContent = "SCORE RESET! Starting fresh.";
    elFeedback.className = "text-xl font-bold text-center text-gray-500 pop-in block";
    
    speakText("Score reset. Let's start fresh.");

    // Wait 1.5s before loading new question to display the reset message
    setTimeout(generateQuestion, 1500); 
}

// --- Event Listeners ---

elBtn.addEventListener('click', handleAction);

elInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAction();
    }
});

// Focus input if user clicks anywhere else (for ease of use)
document.addEventListener('click', (e) => {
    if (state === 'answering' && e.target !== elBtn && e.target !== elInput && !e.target.closest('button')) {
        elInput.focus();
    }
});

// --- Simple Confetti Effect ---
function triggerConfetti() {
    for (let i = 0; i < 50; i++) {
        confettiParticles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 20,
            vy: (Math.random() - 1) * 20,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            life: 100
        });
    }
    animateConfetti();
}

function animateConfetti() {
    if (confettiParticles.length === 0) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < confettiParticles.length; i++) {
        const p = confettiParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // gravity
        p.life--;
        
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 8, 8);
    }
    
    confettiParticles = confettiParticles.filter(p => p.life > 0);
    
    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// --- Operation Button Handlers ---
function setOperation(op) {
    currentOperation = op;
    
    // Update button styles - remove active from all, add to current
    document.querySelectorAll('.op-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`op-${op}`).classList.add('active');
    
    // Blur any focused input to prevent UI conflicts
    elInput.blur();
    
    // Generate new question with new operation (score and history preserved)
    generateQuestion();
}

document.getElementById('op-add').addEventListener('click', () => setOperation('add'));
document.getElementById('op-sub').addEventListener('click', () => setOperation('sub'));
document.getElementById('op-mul').addEventListener('click', () => setOperation('mul'));
document.getElementById('op-div').addEventListener('click', () => setOperation('div'));

// Start Game
generateQuestion();
