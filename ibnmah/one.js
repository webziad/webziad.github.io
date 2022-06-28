let score = [16.48,19.93,18.52,18.33,19.17,19.24,16.05,19.83,19.48,19,17.62,18.81,20,15.48,18.55,19.48,19.60,19.83,19.62,17.74,16.76,19.90,18.74,19.71,19.71,].sort();
console.log(score);

function myscore(){
     var std=document.getElementById("getScore").value;
     if(std==20){
          document.getElementById("final").innerHTML="شاگرد اول کلاس 701";
     }else if(std<20 && std>19.92){
          document.getElementById("final").innerHTML="شاگرد دوم کلاس 701";

     }else if(std<19.93&&std>19.89){
          document.getElementById("final").innerHTML="شاگرد سوم کلاس 701";

     }else if(std<19.90 && std>19.82){
          document.getElementById("final").innerHTML="شاگرد چهارم کلاس 701";

     }else if(std<19.83 && std>19.70){
          document.getElementById("final").innerHTML="شاگرد پنجم کلاس 701";

     }else if(std<19.71 && std>19.61){
          document.getElementById("final").innerHTML="شاگرد ششم کلاس 701";

     }else if(std<19.62){
          document.getElementById("final").innerHTML="شاگرد اول تا ششم701 نیستی";

     }
     
     
     else{
          document.getElementById("final").innerHTML="چی وارد میکنی؟";

     }
     
 }