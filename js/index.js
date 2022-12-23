var btns = document.querySelectorAll(".drum");

for(var i = 0; btns.length; i++){
    btns[i].addEventListener("click", onClick);
}


function onClick(){
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
}