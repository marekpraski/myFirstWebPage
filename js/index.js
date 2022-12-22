
function getRandom(){
    return Math.floor(Math.random() * 100);
}

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x-y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x/y;
}
function getResult(x, y, operator){
    document.querySelector(".result").textContent =  operator(x, y);
}

document.querySelector(".add").addEventListener("click", function(){getResult(x, y, add)});
document.querySelector(".multiply").addEventListener("click", function(){getResult(x, y, multiply)});
document.querySelector(".subtract").addEventListener("click", function(){getResult(x, y, subtract)});
document.querySelector(".divide").addEventListener("click", function(){getResult(x, y, divide)});

document.querySelector(".random1").textContent = getRandom();
document.querySelector(".random2").textContent = getRandom();
var x = Number(document.querySelector(".random1").textContent);
var y = Number(document.querySelector(".random2").textContent);
