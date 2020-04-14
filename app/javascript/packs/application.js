import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';

const changeNavbar = document.querySelector(".pages.home");
if (changeNavbar) {
  initUpdateNavbarOnScroll();
}


