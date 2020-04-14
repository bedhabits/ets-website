const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-ets');
  const menuBar = document.getElementById('menu-bar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-ets-black');
        menuBar.src = "/menu-bar-purple.svg";
      } else {
        navbar.classList.remove('navbar-ets-black');
        menuBar.src = "/menu-bar.svg";
      }
    });
  }
};


export { initUpdateNavbarOnScroll };
