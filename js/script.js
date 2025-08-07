let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  const current = slides[currentSlide];
  current.classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;
  const next = slides[currentSlide];

  setTimeout(() => {
    next.classList.add('active');
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  slides[0].classList.add('active');
  setInterval(showNextSlide, 15000);
});