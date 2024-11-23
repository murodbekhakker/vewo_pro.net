//hamburger
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-menus");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
// loader
const loading = document.getElementById("loading");

const loadingDuration = 3000; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

//back to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  const scrollStep = -window.scrollY / (100 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
// dark-mode
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
