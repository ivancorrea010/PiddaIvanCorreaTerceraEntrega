const botonMenu = document.querySelector(".menu-boton");
const menuNav = document.querySelector(".menu-nav");

botonMenu.addEventListener("click", () => {
  menuNav.classList.toggle("menu-mostrar");
});
