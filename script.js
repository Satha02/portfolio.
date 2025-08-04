const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function sendToWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const url = `https://wa.me/94771234567?text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
