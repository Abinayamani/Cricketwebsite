let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
let slide = documents.querySelectorAll('.home .slide-container .slide');
let index = 0;

function next(){
    slide[index].classlist.remove('active');
    index = (index + 1)% slide.length;
    slide[index].classlist
}