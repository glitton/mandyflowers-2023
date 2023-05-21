const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // get height of navbar, make it fixed when scroll gets past this height
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// add active class to navbar big screen using aria attribute
const navLinks = document.querySelectorAll(".link");
// console.log(navLinks.length);
navLinks.forEach((navlink) => {
  if (navlink.href === window.location.href) {
    navlink.setAttribute("aria-current", "active-page");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
