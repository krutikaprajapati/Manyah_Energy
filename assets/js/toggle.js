/* ==========================
  Toggler JS
 ========================== */

const toggler = document.getElementById('togglerBtn');
const collapse = document.getElementById('navbarScroll');

toggler.addEventListener('click', () => {
    collapse.classList.toggle('show');
    toggler.classList.toggle('addNavToggle');
})