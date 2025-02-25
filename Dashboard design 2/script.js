const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
    sideBar.style.left = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.left = '-20vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) {
            activeItem.removeAttribute('id');
        }

        element.setAttribute('id', 'active');
        activeItem = element;

    });
});



var iconContainer = document.getElementById('icon-container');
var pic = document.getElementById('pic');
function changeTheme(){
    if(iconContainer.style.right == '20px'){
        iconContainer.style.right = '';
        iconContainer.style.left = '20px';
        iconContainer.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
        // pic.style.mixBlendMode = 'darken';
    }
    else{
        iconContainer.style.left = '';
        iconContainer.style.right = '20px';
        iconContainer.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
        // pic.style.mixBlendMode = 'color-burn';
    }
    document.body.classList.toggle('dark-theme');
}