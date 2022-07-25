const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})