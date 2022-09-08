let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minute');
let secondEl = document.getElementById('seconds');
let amPmEl = document.getElementById('amPm');


function mytime() {
     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();


     if (h > 12) {
          h = h - 12;
          amPmEl.innerHTML = 'PM';
     }


     hourEl.innerText = h;
     minuteEl.innerText = m;
     secondEl.innerHTML = s;

     if (h < 10) {
          hourEl.innerText = "0" + h;
     }

     if (m < 10) {
          minuteEl.innerText = "0" + h;
     }

     if (s < 10) {
          secondEl.innerText = "0" + h;
     }

     setTimeout(() => {
          mytime();
     }, 1000);
}

mytime();
