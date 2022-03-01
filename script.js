window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("resize", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.innerWidth < 567);
});

const menutoggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menutoggle.addEventListener("click", function () {
  let nav = document.querySelector("nav");
  menutoggle.classList.toggle("active");
  menu.classList.toggle("slide-menu");
  // nav.classList.toggle("sticky");
});

const list = document.querySelector(".list");
list.addEventListener("click", function () {
  menutoggle.classList.remove("active");
  menu.classList.remove("slide-menu");
});

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
