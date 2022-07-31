
function find() {
     let userInput = document.getElementById('search').value;

     let userInLower = userInput.toLowerCase();
     let userTrim = userInLower.trim();

     if (userTrim == "parsa" || userTrim == "پارسا") {
          parsa();
     }
     else if (userTrim == "parham" || userTrim == "پرهام") {
          parham();
     } else if (userTrim == "hanie" || userTrim == "هانیه" || userTrim == "حانیه") {
          hanie();
     } else if (userTrim == "hadise" || userTrim == "حدیثه" || userTrim == "hadiseh") {
          hadise();
     } else if (userTrim == "zahra" || userTrim == "زهرا") {
          zahra();
     } else if (userTrim == "parasto" || userTrim == "پرستو") {
          parasto();
     }
     else if (userTrim == "hooman" || userTrim == "هومن") {
          hooman();
     }
     else if (userTrim == "sara" || userTrim == "سارا") {
          sara();
     } else if (userTrim == "hadi" || userTrim == "هادی") {
          hadi();
     } else if (userTrim == "hossein" || userTrim == "حسین") {
          hossein();
     } else if (userTrim == "zari" || userTrim == "زری") {
          zari();
     }
     else if (userTrim == "fatemeh" || userTrim == "fateme" || userTrim == "فاطمه") {
          fatemeh();
     } else if (userTrim == "roshanak" || userTrim == "روشنک") {
          roshan();
     } else if (userTrim == "mohaddeseh" || userTrim == "محدثه") {
          mohaddese();
     } else if (userTrim == "mojgan" || userTrim == "مژگان") {
          mojgan();
     }


     else
          alert('انگار اطلاعاتی از این اسم ندارم  :) ')
}



function parsa() {
     document.getElementById('parsa').style.display = "block";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";
}

function parham() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "block";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function hanie() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "block";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function hadise() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "block";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function zahra() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "block";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function parasto() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "block";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function sara() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "block";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function hooman() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "block";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function hadi() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "block";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}


function hossein() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "block";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

     document.getElementById('mohaddeseh').style.display = "none";
}

function zari() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "block";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function fatemeh() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "block";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}


function roshan() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "block";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "none";

}

function mohaddese() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "block";
     document.getElementById('mojgan').style.display = "none";

}

function mojgan() {
     document.getElementById('parsa').style.display = "none";
     document.getElementById('home').style.display = "none";
     document.getElementById('parham').style.display = "none";
     document.getElementById('hanie').style.display = "none";
     document.getElementById('hadise').style.display = "none";
     document.getElementById('zahra').style.display = "none";
     document.getElementById('parasto').style.display = "none";
     document.getElementById('sara').style.display = "none";
     document.getElementById('hooman').style.display = "none";
     document.getElementById('hadi').style.display = "none";
     document.getElementById('hossein').style.display = "none";
     document.getElementById('zari').style.display = "none";
     document.getElementById('fatemeh').style.display = "none";
     document.getElementById('roqhan').style.display = "none";
     document.getElementById('mohaddeseh').style.display = "none";
     document.getElementById('mojgan').style.display = "block";

}