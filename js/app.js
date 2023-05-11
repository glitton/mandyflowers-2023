const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
// date.innerHTML = new Date().getFullYear();
// console.log(date.innerHTML);

// add active class to selected nav link
// const navLinks = document.getElementById("nav-links");
// const links = document.querySelector("nav-link");
// console.log(links);

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
