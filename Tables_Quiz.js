// from 2nd table to 20th table
const MIN = 2;
const MAX = 20;
// each table only 1 to 10
const MULT = 10;

const s = (id) => document.getElementById(id);

function show(viewId) {
  ["p1", "p2", "p3"].forEach((p) => s(p).classList.remove("active"));
  s(viewId).classList.add("active");
}

// fill dropdown with tables 2 to 20
for (let t = MIN; t <= MAX; t++) {
  const option = document.createElement("option");
  option.value = t;
  option.textContent = `${t} × table`;
  s("table").appendChild(option);
}

let current = 2;

s("start").onclick = () => show("p2");
s("back").onclick = () => show("p2");
s("go").onclick = () => start(+s("table").value);

function start(n) {
  current = n;
  s("tableTitle").textContent = `${n} × table`;

  const quizDiv = s("quiz");
  quizDiv.innerHTML = "";

  for (let i = 1; i <= MULT; i++) {
    const row = document.createElement("div");
    row.className = "quiz-row";

    row.innerHTML = `${n} × ${i} = <input type="number" data-i="${i}" /> <span class="badge">?</span>`;

    quizDiv.appendChild(row);
  }

  show("p3");
}

s("check").onclick = () => {
  const inputs = document.querySelectorAll("input[data-i]");
  let correct = 0;

  inputs.forEach((inp) => {
    const i = +inp.dataset.i;
    const expected = current * i;
    const val = +inp.value;
    const badge = inp.nextElementSibling;

    badge.classList.remove("correct", "wrong");

    if (inp.value === "") {
      badge.textContent = "Type";
      return;
    }

    if (val === expected) {
      badge.textContent = "Correct";
      badge.classList.add("correct");
      correct++;
    } else {
      badge.textContent = `Ans: ${expected}`;
      badge.classList.add("wrong");
    }
  });

  s("result").textContent = `${correct}/${MULT} correct`;
};
