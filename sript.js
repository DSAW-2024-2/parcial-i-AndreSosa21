const shareButton = document.querySelector('.share');
const iconMenu = document.querySelector('.icon_menu');
shareButton.addEventListener('click', () => {
    iconMenu.classList.toggle('visible');
});