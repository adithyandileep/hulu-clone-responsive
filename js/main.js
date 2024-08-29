
// Script for closing and opening Login Page.
var modal = document.querySelector('.modal');
var login = document.querySelector('.login-btn');
var close = document.querySelector('.close');

login.addEventListener('click', () => {
    modal.style.display = 'block'
});
close.addEventListener('click', () => {
    modal.style.display = 'none'
});
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    };
});
