const userMenu = document.querySelector(".user-menu");

function toggleMenu() {
  // Проверка: экран 768px и меньше
  if (window.matchMedia("(max-width: 768px)").matches) {
    if (userMenu.classList.contains("hidden")) {
      userMenu.classList.remove("hidden");
    } else {
      userMenu.classList.add("hidden");
    }
  }
}

console.log(userMenu);
