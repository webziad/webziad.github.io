let btn4 = document.querySelector('#s-photo-4');
let btn5 = document.querySelector('#s-photo-5');
let btn6 = document.querySelector('#s-photo-6');
let btn7 = document.querySelector('#s-photo-7');
let btn8 = document.querySelector('#s-photo-8');
let btn9 = document.querySelector('#s-photo-9');
let btn10 = document.querySelector('#s-photo-10');
let btn11 = document.querySelector('#s-photo-11');
let btn12 = document.querySelector('#s-photo-12');
let btn13 = document.querySelector('#s-photo-13');
let btn14 = document.querySelector('#s-photo-14');
let btn15 = document.querySelector('#s-photo-15');


function show(it) {
     document.getElementById(it).style.display = "block";
}
function hide(item) {
     document.getElementById(item).style.display = "none";
}

btn4.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/9nww_one.png')";
     show("t1");
     hide('t2');
     hide('t3');
     hide('t4');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn5.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/0w8p_two.png')";
     show("t2");
     hide('t1');
     hide('t3');
     hide('t4');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn6.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/q0fr_3.jpg')";
     show('t3');
     hide('t1');
     hide('t2');
     hide('t4');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn7.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/chkt_four.png')";
     show("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})

btn8.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/rt3h_five.png')";
     show("t5");
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn9.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/ssxi_six.png')";
     show("t6");
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn10.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/6ot_seven.png')";
     show('t7');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})


btn11.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/eleq_eight.png')";
     show('t8');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t9');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})

btn12.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/1g9_nine.png')";
     show('t9');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t10');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})



btn13.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/wmt8_ten.png')";
     show('t10');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t11');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})



btn14.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/ccqj_eleven.png')";
     show('t11');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t12');
     hide('t13');
     hide('t14');
     hide('t15');
})



btn15.addEventListener('click', () => {
     document.getElementById('b-photo').style.backgroundImage = "url('https://dl.pmup.ir/ftpup/xdvu_twelve.png')";
     show('t12');
     hide("t4");
     hide('t3');
     hide('t1');
     hide('t2');
     hide('t5');
     hide('t6');
     hide('t7');
     hide('t8');
     hide('t9');
     hide('t10');
     hide('t13');
     hide('t14');
     hide('t15');
})

