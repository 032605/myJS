const toggleBTN = document.querySelector('.toggleBTN');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');

toggleBTN.addEventListener('click', () => {
     menu.classList.toggle('active');
     icons.classList.toggle('active');
});
