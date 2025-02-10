// Відкриття/закриття бургер-меню при натисканні
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');
const menuItems = document.querySelectorAll('.menu-name');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Закриття меню після натискання на пункт
menuItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
