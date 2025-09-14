const menuToggle = document.getElementById("menu");
const navLinks = document.getElementById("NavBar");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
