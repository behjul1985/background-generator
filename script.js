var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, "
      + color1.value
      + ", " 
      + color2.value 
      + ")";
       //show updated color changes from picker 
      css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



//The below is the less elegant way of writing it, see above for cleaner code....

// color1.addEventListener("input", function(){
 
//     body.style.background = "linear-gradient(to right, "
//       + color1.value
//       + ", " 
//       + color2.value 
//       + ")";

// })

// color2.addEventListener("input", function(){

//     body.style.background = "linear-gradient(to right, "
//       + color1.value
//       + ", " 
//       + color2.value 
//       + ")";
// })