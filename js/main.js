// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const textSecondary = document.querySelector(".text-secondary");
const iconLinks = document.querySelectorAll("main a");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    main.classList.add("faint");
    textSecondary.classList.add("faint");
    iconLinks.forEach(link => link.classList.add("faint"));

    //  Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    main.classList.remove("faint");
    textSecondary.classList.remove("faint");
    iconLinks.forEach(link => link.classList.remove("faint"));
    // Set Menu State
    showMenu = false;
  }
}
