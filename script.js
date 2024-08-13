var typed = new Typed(".input", {
    strings:["web designer.","web developer.", "ui/ux designer."],
    typeSpeed:100,
    backSpeed:70,
    loop:true
});

let menu =  document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
    
}
