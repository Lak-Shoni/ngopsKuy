// toogle class active
const navbarnav = document.querySelector(".navbar-nav");

function sidebar() {
  navbarnav.classList.toggle("active");
}

const burger = document.querySelector("#burger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
