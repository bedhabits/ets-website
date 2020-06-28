const menuClose = () => {
 const menu = document.getElementById("mySidebar");

  window.addEventListener('scroll', () => {
    // if (window.scrollY >= window.innerHeight) {
    if (document.body.scrollTop >= document.querySelector(".home-banner").innerHeight || document.documentElement.scrollTop >= 360) {
      menu.classList.remove("toggle-menu-bar")
    }
  });
};

export { menuClose };



