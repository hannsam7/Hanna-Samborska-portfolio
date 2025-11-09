document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    });
    });

// Dark mode toggle
const darkBtn = document.getElementById('darkModeToggle');
if (darkBtn) {
  // Chosen mode in localStorage
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
    darkBtn.textContent = '☀️';
  }
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darkOn = document.body.classList.contains('dark-mode');
    darkBtn.textContent = darkOn ? '☀️' : '🌙';
    localStorage.setItem('darkMode', darkOn ? 'on' : 'off');
  });
}

const typedText = [
    "Webutviklerstudent ved NTNU",
    "Frontend & Backend",
    "Sikkerhet • Struktur • Kreativitet"
  ];
  let i = 0, j = 0, current = "", isDeleting = false;
  function type() {
    const el = document.getElementById("typed");
    if (!el) return;
    if (!isDeleting && j <= typedText[i].length) {
      current = typedText[i].substring(0, j++);
      el.textContent = current;
      setTimeout(type, 80);
    } else if (isDeleting && j >= 0) {
      current = typedText[i].substring(0, j--);
      el.textContent = current;
      setTimeout(type, 40);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % typedText.length;
      setTimeout(type, 900);
    }
  }
  type();