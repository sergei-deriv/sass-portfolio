const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)
// hamburger.addEventListener('click', () => { alert('click'); })

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        // console.log('add');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        // console.log('remove');

        showMenu = false;
    }
}