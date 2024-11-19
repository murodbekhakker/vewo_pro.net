//hamburger
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-menus");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
