import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { openNav } from '../components/menu-bar';

const changeNavbar = document.querySelector(".pages.home");
if (changeNavbar) {
  initUpdateNavbarOnScroll();
}

document.getElementById('menu-bar-open').addEventListener('click', () => {
  openNav();
})

