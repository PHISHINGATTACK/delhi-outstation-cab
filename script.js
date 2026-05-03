// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});


// Hero text animation (on load)
window.addEventListener('load', () => {
  document.querySelector('.hero h1').classList.add('show');
  document.querySelector('.hero p').classList.add('show');
});


// Button click ripple effect
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    let circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);

    let x = e.clientX - this.offsetLeft;
    let y = e.clientY - this.offsetTop;

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    setTimeout(() => circle.remove(), 600);
  });
});


// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 10 
    ? "0 2px 10px rgba(0,0,0,0.2)" 
    : "none";
});