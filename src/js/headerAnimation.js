const mainHeader = document.querySelector(".main-header-content");
const popupHeader = document.querySelector(".popup-header-wrapper");

const screenWidth = window.innerWidth;
let isWaiting = false;

export function showPopupHeader() {
  const offsetY = window.scrollY;

  if (window.innerWidth > 768 && window.screen.width > 768 && !isWaiting) {
    if (offsetY > 40) {
      mainHeader.setAttribute("style", "opacity: 0");
    } else {
      mainHeader.removeAttribute("style");
    }

    if (offsetY > 120) {
      popupHeader.classList.add("visible");
    } else {
      popupHeader.classList.remove("visible");
    }

    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, 150);
  }
}







// Header scroll animation
// window.addEventListener('DOMContentLoaded', function () {
//   const headerContent = document.getElementById('headerContent');
//   const headerBar = document.getElementById('headerBar');

//   window.addEventListener('scroll', function () {
//     const scrollY = window.scrollY || window.pageYOffset;

//     // Затухание основного текста и фона
//     if (scrollY > 40) {
//       headerContent.style.opacity = '0';
//       headerContent.style.pointerEvents = 'none';
//       headerContent.style.backgroundColor = 'rgba(245, 246, 243, 0)'; // прозрачный фон
//     } else {
//       headerContent.style.opacity = '1';
//       headerContent.style.pointerEvents = 'auto';
//       headerContent.style.backgroundColor = 'rgba(245, 246, 243, 1)'; // обычный фон
//     }

//     // Появление бара
//     if (scrollY > 120) {
//       headerBar.classList.add('visible');
//     } else {
//       headerBar.classList.remove('visible');
//     }
//   });
// });