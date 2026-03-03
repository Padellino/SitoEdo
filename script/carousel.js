window.addEventListener('load', function () {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', function () {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }
});