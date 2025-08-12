const userMenu = document.querySelector(".plants-menu");

function toggleMenu() {
    if (userMenu.classList.contains("hidden")) {
        userMenu.classList.remove("hidden");
    } else {
        userMenu.classList.add("hidden");
    }
}
