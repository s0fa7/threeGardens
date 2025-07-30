const images = [
  '/src/assets/images/aboutUs/work1.png', // замените на свои пути
  '/src/assets/images/aboutUs/work2.png',
  '/src/assets/images/aboutUs/work3.png',
  '/src/assets/images/aboutUs/work1.png',
  '/src/assets/images/aboutUs/work2.png'
];

const track = document.querySelector('.carousel-track');
let current = 2; // индекс активного (большого) фото

function renderCarousel() {
  track.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    let className = 'carousel-img hidden';
    // Индексы для маленьких слева и справа, активного
    if ((i + images.length) % images.length === (current - 2 + images.length) % images.length) {
      className = 'carousel-img small';
    } else if ((i + images.length) % images.length === (current - 1 + images.length) % images.length) {
      className = 'carousel-img small right';
    } else if (i === current) {
      className = 'carousel-img active';
    }
    const img = document.createElement('img');
    img.src = images[i];
    img.className = className;
    img.alt = `Фото ${i+1}`;
    track.appendChild(img);
  }
}

function next() {
  current = (current + 1) % images.length;
  renderCarousel();
}
function prev() {
  current = (current - 1 + images.length) % images.length;
  renderCarousel();
}

document.getElementById('carousel-next').onclick = next;
document.getElementById('carousel-prev').onclick = prev;

renderCarousel();