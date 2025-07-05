let safeToWarn = false;
const input = document.querySelector('.input');
const modeBtn = document.getElementById('modeBtn');

// Enable protection after typing
input.addEventListener('input', () => {
  safeToWarn = true;
});

// Show browser warning
window.addEventListener('beforeunload', function (e) {
  if (safeToWarn) {
    e.preventDefault();
    e.returnValue = '';
    return '';
  }
});

// Toggle dark mode
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});
