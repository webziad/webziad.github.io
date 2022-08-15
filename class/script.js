let menubtn = document.querySelector('#s-menu');
let menu = document.querySelector("#small-menu");


menubtn.addEventListener('click', () => {
     menu.classList.toggle('show');
})


let htmlbtn = document.querySelector('#htmlbtn');
let cssbtn = document.querySelector('#cssbtn');
let jsbtn = document.querySelector('#jsbtn');
let hfwbtn = document.querySelector('#hfw');
let hswbtn = document.querySelector('#hsw');
let htwbtn = document.querySelector('#htw');
let cfwbtn = document.querySelector('#cfw');
let livebtn = document.querySelector("#livebtn");
function minus(side) {
     document.getElementById(side).style.display = "flex";
}

function none(side) {
     document.getElementById(side).style.display = "none";
}




htmlbtn.addEventListener('click', () => {
     minus("html5");
     none("css3");
     none("js");
     none("live");

})


cssbtn.addEventListener('click', () => {
     minus("css3");
     none("html5");
     none("js");
     none("live");

})


jsbtn.addEventListener('click', () => {
     none("css3");
     none("html5");
     minus("js");
     none("live");
})


livebtn.addEventListener('click', () => {
     none("css3");
     none("html5");
     none("js");
     minus("live");
})






hfwbtn.addEventListener("click", () => {
     minus("html-first-week");
     none('html-third-week');
     none('html-second-week');
     none('css-first-week');

})

hswbtn.addEventListener("click", () => {
     minus("html-second-week");
     none('html-first-week');
     none("html-third-week");
     none('css-first-week');

})

htwbtn.addEventListener("click", () => {
     minus("html-third-week");
     none('html-second-week');
     none("html-first-week");
     none('css-first-week');

})

cfwbtn.addEventListener('click', () => {
     none("html-third-week");
     none('html-second-week');
     none("html-first-week");
     minus('css-first-week');
})
