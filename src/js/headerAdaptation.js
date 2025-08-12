
const burger = document.getElementById('burger');
const nav = document.querySelector('.mobbile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
