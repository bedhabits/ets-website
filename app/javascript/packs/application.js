import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { openNav } from '../components/menu-bar';
import { menuClose } from '../components/hide-menu';
import '../components/close-bar'

const changeNavbar = document.querySelector(".pages.home");
if (changeNavbar) {
  initUpdateNavbarOnScroll();
}

document.getElementById('menu-bar-open').addEventListener('click', () => {
  openNav();
})

menuClose();
