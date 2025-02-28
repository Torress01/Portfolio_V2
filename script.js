const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 20);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x"); // Remove a classe do menu
  navlist.classList.remove("open"); // Esconde a navlist
};

const topo = document.getElementById("top");

window.addEventListener("scroll", function () {
  topo.classList.toggle("show-top", window.scrollY > 200);
  topo.classList.toggle("hide-top", window.scrollY < 140);
});

window.onload = () => {
  topo.classList.toggle("hide-top");
};
