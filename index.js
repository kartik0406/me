var text = ["Hello","Hi","नमस्ते", "Hola", "مرحبا", "안녕"];
var i = 0;
var elem = document.getElementById("Hello");
var inst = setInterval(change, 900);

function change() {
  elem.innerHTML = text[i];
  i++;
  if (i >= text.length) {
    i = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
console.log("connected");

setTimeout(function(){ 
var j=0;
var txt ="I'm Kartik Khanna A Web Developer and Designer"
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (j < txt.length) {
      
    document.getElementById("Name").innerHTML += txt.charAt(j);
    
    if(j===17 || j===3){
        document.getElementById("Name").innerHTML +="<br>";
    }
   
    j++;
    setTimeout(typeWriter1, speed);
    
  }
}
setInterval(typeWriter1,1500);
},25);

$(document).ready(function(){
  $('.sidenav').sidenav();
});
