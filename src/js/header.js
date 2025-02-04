// Відкриття/закриття бургер-меню при натисканні
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open'); // Додаємо/видаляємо клас для показу/сховання меню
});
