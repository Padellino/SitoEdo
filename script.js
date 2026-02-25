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