const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-ets');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-ets-black');
      } else {
        navbar.classList.remove('navbar-ets-black');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
