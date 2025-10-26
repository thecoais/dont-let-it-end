const rate = 7100; // per second (approx)
const start = Date.now();
const padLength = 12;

function formatNumber(num) {
  return num.toString().padStart(padLength, '0').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function tick() {
  const secs = (Date.now() - start) / 1000;
  const count = Math.floor(secs * rate);
  const formatted = formatNumber(count);
  
  const countDiv = document.getElementById("count");
  countDiv.innerHTML = '';
  
  for (let char of formatted) {
    const span = document.createElement('span');
    span.className = char === ',' ? 'comma' : 'digit';
    span.textContent = char;
    countDiv.appendChild(span);
  }
  
  requestAnimationFrame(tick);
}

tick();