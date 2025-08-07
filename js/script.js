let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  const current = slides[currentSlide];
  current.classList.remove('active');
  current.classList.add('next');

  currentSlide = (currentSlide + 1) % slides.length;
  const next = slides[currentSlide];

  setTimeout(() => {
    next.classList.add('active');
    current.classList.remove('next');
  }, 2000);
}

window.addEventListener("DOMContentLoaded", () => {
  slides[0].classList.add('active');
  setInterval(showNextSlide, 10000);
});