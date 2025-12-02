/*
 Expense Tracker - Frontend-only SPA

 How to reset the app during development:
 - Click the "Reset App" button in the UI which clears localStorage for this app.
 - OR open devtools and run: localStorage.removeItem('et_categories'); localStorage.removeItem('et_expenses');

 Data structure for an expense:
 {
   id: string,
   category: string,
   amount: number,
   date: "YYYY-MM-DD"
 }

 Functions implemented:
 - addExpense()
 - addCategory()
 - deleteExpense()
 - saveToLocalStorage()
 - loadFromLocalStorage()
 - filterByDaily/Weekly/Monthly/Yearly()
 - groupByCategory()
 - renderTable()
 - renderChart()
 */

// Local storage keys
const LS_CATEGORIES = 'et_categories';
const LS_EXPENSES = 'et_expenses';

// Default categories
const DEFAULT_CATEGORIES = ['Food','Transport','Groceries','Rent','Entertainment','Utilities','Shopping','Others'];

// State
let categories = [];
let expenses = [];
let currentRange = 'daily';
let chart = null;

// DOM refs
const categorySelect = document.getElementById('category-select');
const addCategoryBtn = document.getElementById('add-category-btn');
const newCategoryRow = document.getElementById('new-category-row');
const newCategoryInput = document.getElementById('new-category-input');
const saveCategoryBtn = document.getElementById('save-category-btn');
const cancelCategoryBtn = document.getElementById('cancel-category-btn');
const expenseForm = document.getElementById('expense-form');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const formMsg = document.getElementById('form-msg');
const expensesTableBody = document.querySelector('#expenses-table tbody');
const categorySummary = document.getElementById('category-summary');
const overallTotalEl = document.getElementById('overall-total');
const rangeRadios = document.getElementsByName('range');
const filterDate = document.getElementById('filter-date');
const filterWeek = document.getElementById('filter-week');
const filterMonth = document.getElementById('filter-month');
const filterYear = document.getElementById('filter-year');
const resetBtn = document.getElementById('reset-btn');
const userPhotoImg = document.getElementById('user-photo');
const photoInput = document.getElementById('photo-input');
const uploadPhotoBtn = document.getElementById('upload-photo-btn');
const removePhotoBtn = document.getElementById('remove-photo-btn');
const zoomSlider = document.getElementById('zoom-slider');
const alignButtons = document.querySelectorAll('.align-btn');
const resetPhotoPosBtn = document.getElementById('reset-photo-pos');
const fitPhotoBtn = document.getElementById('fit-photo-btn');
const coverPhotoBtn = document.getElementById('cover-photo-btn');
const zoomLabel = document.getElementById('zoom-label');
const exportBtn = document.getElementById('export-btn');

// photo transform state (px offsets)
let imgScale = 1;
let imgTx = 0; // pixels
let imgTy = 0; // pixels
let isPanning = false;
let panStart = {x:0,y:0};
let panOrigin = {x:0,y:0};

// Init
document.addEventListener('DOMContentLoaded', init);

function init(){
  loadFromLocalStorage();
  bindEvents();
  // load user photo from localStorage if present
  const storedPhoto = localStorage.getItem('et_user_photo');
  if(storedPhoto){ userPhotoImg.src = storedPhoto; }
  // load saved transform (if any)
  const t = localStorage.getItem('et_user_photo_transform');
  if(t){ try{ const s = JSON.parse(t); imgScale = s.scale||1; imgTx = s.tx||0; imgTy = s.ty||0; applyImageTransform(); if(zoomSlider) zoomSlider.value = imgScale; }catch(e){} }
  // set date inputs to today
  const today = new Date().toISOString().slice(0,10);
  dateInput.value = today;
  filterDate.value = today;
  filterWeek.value = today;
  filterMonth.value = today.slice(0,7);
  filterYear.value = new Date().getFullYear();
  renderAll();
}

function bindEvents(){
  addCategoryBtn.addEventListener('click', ()=>{ newCategoryRow.classList.remove('hidden'); newCategoryInput.focus(); });
  cancelCategoryBtn.addEventListener('click', ()=>{ newCategoryRow.classList.add('hidden'); newCategoryInput.value = ''; });
  saveCategoryBtn.addEventListener('click', ()=>{ const v=newCategoryInput.value.trim(); if(v) addCategory(v); });

  expenseForm.addEventListener('submit', (e)=>{ e.preventDefault(); handleAddExpense(); });

  Array.from(rangeRadios).forEach(r=> r.addEventListener('change', onRangeChange));
  filterDate.addEventListener('change', renderAll);
  filterWeek.addEventListener('change', renderAll);
  filterMonth.addEventListener('change', renderAll);
  filterYear.addEventListener('change', renderAll);

  resetBtn.addEventListener('click', ()=>{
    if(confirm('Reset app? This will clear all categories and expenses.')){
      localStorage.removeItem(LS_CATEGORIES);
      localStorage.removeItem(LS_EXPENSES);
      location.reload();
    }
  });

  // Photo upload handlers
  if(uploadPhotoBtn && photoInput){
    uploadPhotoBtn.addEventListener('click', ()=> photoInput.click());
    photoInput.addEventListener('change', handlePhotoUpload);
  }
  if(removePhotoBtn){ removePhotoBtn.addEventListener('click', removePhoto); }
  // zoom and alignment handlers
  if(zoomSlider){ zoomSlider.addEventListener('input', (e)=>{ imgScale = parseFloat(e.target.value); applyImageTransform(); savePhotoTransform(); updateZoomLabel(); }); }
  if(alignButtons){ alignButtons.forEach(b=> b.addEventListener('click', (ev)=>{ handleAlign(ev.target.dataset.align); })); }
  if(resetPhotoPosBtn){ resetPhotoPosBtn.addEventListener('click', ()=>{ imgScale=1; imgTx=0; imgTy=0; applyImageTransform(); savePhotoTransform(); if(zoomSlider) zoomSlider.value = imgScale; updateZoomLabel(); }); }
  if(fitPhotoBtn){ fitPhotoBtn.addEventListener('click', ()=>{ fitImage(); }); }
  if(coverPhotoBtn){ coverPhotoBtn.addEventListener('click', ()=>{ coverImage(); }); }

  if(exportBtn){ exportBtn.addEventListener('click', ()=>{ exportDataCSV(); }); }

  // panning (drag to reposition)
  const viewport = document.querySelector('.image-viewport');
  if(viewport && userPhotoImg){
    viewport.addEventListener('pointerdown', (e)=>{
      if(!userPhotoImg.src) return;
      isPanning = true;
      panStart = {x:e.clientX, y:e.clientY};
      panOrigin = {x:imgTx, y:imgTy};
      viewport.setPointerCapture(e.pointerId);
      viewport.classList.add('grabbing');
    });
    viewport.addEventListener('pointermove', (e)=>{
      if(!isPanning) return;
      const dx = e.clientX - panStart.x;
      const dy = e.clientY - panStart.y;
      imgTx = panOrigin.x + dx;
      imgTy = panOrigin.y + dy;
      applyImageTransform();
    });
    viewport.addEventListener('pointerup', (e)=>{ if(isPanning){ isPanning=false; savePhotoTransform(); } });
    viewport.addEventListener('pointercancel', (e)=>{ if(isPanning){ isPanning=false; savePhotoTransform(); } });
    viewport.addEventListener('pointerup', (e)=>{ viewport.classList.remove('grabbing'); });
    viewport.addEventListener('pointercancel', (e)=>{ viewport.classList.remove('grabbing'); });
    // wheel zoom
    viewport.addEventListener('wheel', (ev)=>{
      if(!userPhotoImg.src) return;
      ev.preventDefault();
      const delta = ev.deltaY < 0 ? 0.05 : -0.05;
      let newScale = imgScale + delta;
      newScale = Math.max(0.3, Math.min(3, newScale));
      imgScale = newScale;
      applyImageTransform(); savePhotoTransform(); if(zoomSlider) zoomSlider.value = imgScale; updateZoomLabel();
    }, {passive:false});
  }
}

/* EXPORT CSV */
function exportDataCSV(){
  // Build CSV with expenses and categories
  const rows = [];
  rows.push(['id','date','category','amount']);
  expenses.forEach(e=> rows.push([e.id, e.date, e.category, Number(e.amount).toFixed(2)]));

  // Add a blank line then categories
  rows.push([]);
  rows.push(['Categories']);
  categories.forEach(c=> rows.push([c]));

  // Convert to CSV string
  const csv = rows.map(r => r.map(cell => {
    if(cell === undefined || cell === null) return '';
    const s = String(cell).replace(/"/g,'""');
    return `"${s}"`;
  }).join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const now = new Date();
  const filename = `expenses_${now.getFullYear()}${('0'+(now.getMonth()+1)).slice(-2)}${('0'+now.getDate()).slice(-2)}.csv`;
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=> URL.revokeObjectURL(url), 5000);
}

function showToast(message, type='success'){
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(()=>{ t.classList.add('hide'); try{ document.body.removeChild(t);}catch(e){} }, 2400);
}

function handlePhotoUpload(e){
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ showToast('Please select an image file','error'); return; }
  const reader = new FileReader();
  reader.onload = function(ev){
    const dataUrl = ev.target.result;
    try{ localStorage.setItem('et_user_photo', dataUrl); }
    catch(err){ console.warn('Could not save image to localStorage', err); }
    userPhotoImg.src = dataUrl;
    showToast('Photo uploaded');
    // reset transform when a new photo is uploaded
    // when a new image uploads, fit it into the viewport so you can see the full image first
    imgScale = 1; imgTx = 0; imgTy = 0; applyImageTransform(); savePhotoTransform(); if(zoomSlider) zoomSlider.value = imgScale; updateZoomLabel();
    // wait for image to be ready and then fit
    userPhotoImg.onload = function(){ fitImage(); };
  };
  reader.readAsDataURL(file);
}

function removePhoto(){
  if(!confirm('Remove uploaded photo?')) return;
  localStorage.removeItem('et_user_photo');
  userPhotoImg.src = '';
  showToast('Photo removed');
  // reset transform
  imgScale = 1; imgTx = 0; imgTy = 0; applyImageTransform(); localStorage.removeItem('et_user_photo_transform');
}

function fitImage(){
  if(!userPhotoImg || !userPhotoImg.src) return;
  const viewport = document.querySelector('.image-viewport');
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;
  const iw = userPhotoImg.naturalWidth || userPhotoImg.width;
  const ih = userPhotoImg.naturalHeight || userPhotoImg.height;
  if(!iw || !ih) return;
  // compute scale so image entirely fits inside viewport
  const scaleX = vw / iw;
  const scaleY = vh / ih;
  const fitScale = Math.min(scaleX, scaleY);
  // ensure a small margin so edges don't touch exactly
  imgScale = Math.max(fitScale, 0.05);
  imgTx = 0; imgTy = 0;
  applyImageTransform();
  if(zoomSlider) { zoomSlider.value = imgScale; }
  savePhotoTransform();
  updateZoomLabel();
}

function coverImage(){
  if(!userPhotoImg || !userPhotoImg.src) return;
  const viewport = document.querySelector('.image-viewport');
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;
  const iw = userPhotoImg.naturalWidth || userPhotoImg.width;
  const ih = userPhotoImg.naturalHeight || userPhotoImg.height;
  if(!iw || !ih) return;
  // compute scale so image covers the entire viewport (no empty space)
  const scaleX = vw / iw;
  const scaleY = vh / ih;
  const coverScale = Math.max(scaleX, scaleY);
  imgScale = Math.max(coverScale, 0.3);
  // center by default
  imgTx = 0; imgTy = 0;
  applyImageTransform();
  if(zoomSlider) { zoomSlider.value = imgScale; }
  savePhotoTransform();
  updateZoomLabel();
}

function updateZoomLabel(){ if(zoomLabel) zoomLabel.textContent = Math.round(imgScale*100) + '%'; }

function applyImageTransform(){
  if(!userPhotoImg) return;
  // translate values are in pixels relative to center
  userPhotoImg.style.transform = `translate(calc(-50% + ${imgTx}px), calc(-50% + ${imgTy}px)) scale(${imgScale})`;
}

function savePhotoTransform(){
  try{ localStorage.setItem('et_user_photo_transform', JSON.stringify({scale: imgScale, tx: imgTx, ty: imgTy})); }catch(e){}
}

function handleAlign(al){
  // quick presets (set translation such that focal point aligns)
  // the translation values are rough approximations; user can fine-tune by dragging
  if(!al) return;
  const w = document.querySelector('.image-viewport')?.clientWidth || 200;
  const h = document.querySelector('.image-viewport')?.clientHeight || 120;
  const shiftX = Math.round(w*0.18);
  const shiftY = Math.round(h*0.12);
  switch(al){
    case 'top-left': imgTx = -shiftX; imgTy = -shiftY; break;
    case 'top-center': imgTx = 0; imgTy = -shiftY; break;
    case 'top-right': imgTx = shiftX; imgTy = -shiftY; break;
    case 'center-left': imgTx = -shiftX; imgTy = 0; break;
    case 'center': imgTx = 0; imgTy = 0; break;
    case 'center-right': imgTx = shiftX; imgTy = 0; break;
    case 'bottom-left': imgTx = -shiftX; imgTy = shiftY; break;
    case 'bottom-center': imgTx = 0; imgTy = shiftY; break;
    case 'bottom-right': imgTx = shiftX; imgTy = shiftY; break;
  }
  applyImageTransform(); savePhotoTransform();
}

/* STORAGE */
function saveToLocalStorage(){
  localStorage.setItem(LS_CATEGORIES, JSON.stringify(categories));
  localStorage.setItem(LS_EXPENSES, JSON.stringify(expenses));
}

function loadFromLocalStorage(){
  const cat = localStorage.getItem(LS_CATEGORIES);
  categories = cat ? JSON.parse(cat) : [...DEFAULT_CATEGORIES];
  const ex = localStorage.getItem(LS_EXPENSES);
  expenses = ex ? JSON.parse(ex) : [];
}

/* CATEGORIES */
function populateCategorySelect(){
  categorySelect.innerHTML = '';
  categories.forEach(c=>{
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; categorySelect.appendChild(opt);
  });
}

function addCategory(name){
  const n = name.trim();
  if(!n) return showFormError('Category name required');
  if(categories.find(c=> c.toLowerCase()===n.toLowerCase())){ showToast('Category exists','error'); return; }
  categories.push(n);
  saveToLocalStorage();
  populateCategorySelect();
  newCategoryInput.value = '';
  newCategoryRow.classList.add('hidden');
  showToast('Category added');
  renderAll();
}

/* EXPENSES */
function handleAddExpense(){
  clearFormMessage();
  const category = categorySelect.value;
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;
  if(!category) return showFormError('Category is required');
  if(!date) return showFormError('Date is required');
  if(!amount || isNaN(amount) || amount <= 0) return showFormError('Amount must be a positive number');

  const exp = { id: cryptoRandomId(), category, amount: Math.round(amount*100)/100, date };
  addExpense(exp);
}

function addExpense(exp){
  expenses.push(exp);
  // sort newest first
  expenses.sort((a,b)=> b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  saveToLocalStorage();
  showToast('Expense added');
  // reset amount, leave category and date default
  amountInput.value = '';
  dateInput.value = new Date().toISOString().slice(0,10);
  renderAll();
}

function deleteExpense(id){
  if(!confirm('Delete this expense?')) return;
  expenses = expenses.filter(e=> e.id !== id);
  saveToLocalStorage();
  showToast('Deleted');
  renderAll();
}

/* FILTERS */
function onRangeChange(e){
  currentRange = e.target.value;
  // show/hide inputs
  document.getElementById('daily-input').classList.toggle('hidden', currentRange!=='daily');
  document.getElementById('weekly-input').classList.toggle('hidden', currentRange!=='weekly');
  document.getElementById('monthly-input').classList.toggle('hidden', currentRange!=='monthly');
  document.getElementById('yearly-input').classList.toggle('hidden', currentRange!=='yearly');
  renderAll();
}

function filterExpenses(){
  if(!expenses || expenses.length===0) return [];
  if(currentRange==='daily'){
    const d = filterDate.value; if(!d) return expenses; return expenses.filter(e=> e.date===d);
  }
  if(currentRange==='weekly'){
    const d = filterWeek.value; if(!d) return expenses;
    const target = new Date(d);
    const start = startOfWeek(target);
    const end = new Date(start); end.setDate(end.getDate()+6);
    return expenses.filter(e=>{ const ed = new Date(e.date); return ed >= start && ed <= end; });
  }
  if(currentRange==='monthly'){
    const m = filterMonth.value; if(!m) return expenses; // format YYYY-MM
    return expenses.filter(e=> e.date.slice(0,7)===m);
  }
  if(currentRange==='yearly'){
    const y = String(filterYear.value); if(!y) return expenses; return expenses.filter(e=> e.date.slice(0,4)===y);
  }
  return expenses;
}

function startOfWeek(d){
  // Monday as start
  const date = new Date(d);
  const day = (date.getDay()+6)%7; // Monday=0
  date.setDate(date.getDate()-day);
  date.setHours(0,0,0,0);
  return date;
}

/* GROUPING */
function groupByCategory(list){
  const map = new Map();
  list.forEach(e=>{
    const prev = map.get(e.category) || 0;
    map.set(e.category, Math.round((prev + e.amount)*100)/100);
  });
  // convert to array sorted desc
  return Array.from(map.entries()).map(([category,total])=>({category,total})).sort((a,b)=> b.total - a.total);
}

/* RENDER */
function renderAll(){
  populateCategorySelect();
  const filtered = filterExpenses();
  renderTable(filtered);
  renderSummary(filtered);
  renderChart(filtered);
}

function renderTable(list){
  expensesTableBody.innerHTML = '';
  // sort newest first by date then id
  const sorted = [...list].sort((a,b)=> b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  let total = 0;
  sorted.forEach(e=>{
    total += e.amount;
    const tr = document.createElement('tr');
    const tdDate = document.createElement('td'); tdDate.textContent = e.date;
    const tdCat = document.createElement('td'); tdCat.textContent = e.category;
    const tdAmt = document.createElement('td'); tdAmt.className = 'align-right'; tdAmt.textContent = formatCurrency(e.amount);
    const tdAct = document.createElement('td');
    const del = document.createElement('button'); del.className='delete-btn'; del.innerHTML='&#128465;'; del.title='Delete'; del.addEventListener('click', ()=> deleteExpense(e.id));
    tdAct.appendChild(del);
    tr.appendChild(tdDate); tr.appendChild(tdCat); tr.appendChild(tdAmt); tr.appendChild(tdAct);
    expensesTableBody.appendChild(tr);
  });
  overallTotalEl.textContent = formatCurrency(total);
}

function renderSummary(list){
  const groups = groupByCategory(list);
  categorySummary.innerHTML = '';
  if(groups.length===0){ categorySummary.innerHTML = '<div class="small muted">No expenses for selected range.</div>'; return; }
  groups.forEach(g=>{
    const div = document.createElement('div'); div.className='summary-item';
    const left = document.createElement('div'); left.innerHTML = `<span class="category-dot" style="background:${colorForString(g.category)}"></span><strong>${g.category}</strong>`;
    const right = document.createElement('div'); right.innerHTML = `<strong>${formatCurrency(g.total)}</strong>`;
    div.appendChild(left); div.appendChild(right);
    categorySummary.appendChild(div);
  });
}

/* CHART */
function renderChart(list){
  const groups = groupByCategory(list);
  const ctx = document.getElementById('category-chart').getContext('2d');
  const labels = groups.map(g=>g.category);
  const data = groups.map(g=>g.total);
  const colors = labels.map(l=> colorForString(l));
  if(chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'pie',
    data: { labels, datasets: [{ data, backgroundColor: colors }] },
    options: { plugins:{legend:{position:'bottom'}}, responsive:true, maintainAspectRatio:false }
  });
}

/* UTIL */
function formatCurrency(v){ return '₹' + Number(v).toFixed(2); }

function colorForString(str){
  // deterministic pastel color from string
  let hash = 0; for(let i=0;i<str.length;i++) hash = str.charCodeAt(i) + ((hash<<5)-hash);
  const h = Math.abs(hash) % 360; return `hsl(${h} 70% 55%)`;
}

function cryptoRandomId(){
  // simple random id
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,9);
}

function showFormError(msg){ formMsg.className='msg error'; formMsg.textContent=msg; }
function clearFormMessage(){ formMsg.className='msg'; formMsg.textContent=''; }

/* Expose a few core functions for potential future extension */
window.et = {
  addExpense, addCategory, deleteExpense, saveToLocalStorage, loadFromLocalStorage, filterExpenses, groupByCategory
};
