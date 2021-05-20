const h3=document.querySelector("h3");
const p = document.querySelector("p");
const color1=document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body=document.getElementById("body");

function setgradient(){
    body.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ")";
    h3.textContent= body.style.background +";"; 
}

color1.addEventListener("input",setgradient)
color2.addEventListener("input",setgradient)

function segradient() {
    p.textContent = color1.value + ", " +color2.value;
}

color1.addEventListener("input", segradient)
color2.addEventListener("input", segradient)

document.onkeydown = function (e) {
    if (e.keyCode == 123) { return false }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) { return false }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) { return false }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) { return false }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) { return false }
};

function myFunction() {
    document.getElementById("demo").style.display = "none";
}