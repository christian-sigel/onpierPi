window.addEventListener("DOMContentLoaded", () => {
  const quoteContainer = document.querySelector(".quote-container");
  const background = document.querySelector(".background");

  setTimeout(() => {
    background.style.filter = "blur(5px)";
    quoteContainer.classList.add("visible");
  }, 2000);
});