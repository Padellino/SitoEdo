document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const lightbox = document.getElementById('lightbox');
  const iframe = lightbox.querySelector('iframe');
  const close = lightbox.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      lightbox.style.display = 'flex';
    });
  });

  close.addEventListener('click', () => {
    iframe.src = '';
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      iframe.src = '';
      lightbox.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const hero = document.querySelector(".video-hero");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  // APERTURA
  hero.addEventListener("click", function () {
    if (!modal.classList.contains("active")) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      modalVideo.play();
    }
  });

  // CHIUSURA clic fuori
  modal.addEventListener("click", function (e) {
    if (!modalVideo.contains(e.target)) {
      e.stopPropagation(); // 🔥 blocca propagazione
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.currentTime = 0;
    document.body.style.overflow = "auto";
  }

});
document.addEventListener("DOMContentLoaded", function () {

  const scrollBtn = document.querySelector(".scroll-btn");

  scrollBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // 🔥 blocca il click di propagare al video
  });

});

document.addEventListener("DOMContentLoaded", function () {

  const scrollBtn = document.querySelector(".scroll-btn");

  scrollBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // blocca apertura showreel
    e.preventDefault(); // evita default ancoraggio

    const target = document.querySelector(this.getAttribute("href"));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const navbars = document.querySelectorAll('.navbar'); // tutte le navbar
  let lastScrollTop = 0;

  if (!navbars.length) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    navbars.forEach(navbar => {
      const navbarHeight = navbar.offsetHeight;

      if (scrollTop > lastScrollTop + 5) {
        // Scroll giù → nasconde navbar
        navbar.style.top = `-${navbarHeight}px`;
      } else if (scrollTop < lastScrollTop) {
        // Scroll su → mostra navbar
        navbar.style.top = '0';
      }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});