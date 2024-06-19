document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let index = 0;

  function showImage(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    index = index > 0 ? index - 1 : images.length - 1;
    showImage(index);
  });

  nextButton.addEventListener("click", () => {
    index = index < images.length - 1 ? index + 1 : 0;
    showImage(index);
  });

  // Auto-slide
  setInterval(() => {
    index = index < images.length - 1 ? index + 1 : 0;
    showImage(index);
  }, 3000);
});
