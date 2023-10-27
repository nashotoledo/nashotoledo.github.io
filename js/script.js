/*=============== MENU HAMBURGUESA===================*/ 

document.querySelector(".bars__menu").addEventListener("click", animeteBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".menu");

function animeteBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("menu__active");
}


/*================= SCROLL REVELD ================== */

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.logo',{delay:200, origin:'bottom'});
sr.reveal('.icons',{delay:200, origin:'right'});
sr.reveal('.scroll-down',{delay:200, origin:'right'});

