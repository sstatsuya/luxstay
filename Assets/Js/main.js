// Begin AOS
$(window).on('load', function () {
    AOS.refresh();
});
$(document).ready(function () {
    AOS.init();
});
// End AOS

// Begin Portable navigation
const overlay = document.querySelector('.overlay');
const checkShowNav = document.querySelector('.header__portable-nav-check');
const portableNav = document.querySelector('.header__portable-nav');
overlay.onclick = () =>{
    checkShowNav.checked = false;
}
portableNav.onclick = (e) =>{
    e.stopPropagation();
}
// End Portable navigation