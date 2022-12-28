
var btns = document.querySelectorAll(".drum");
var keyW = new Key("sounds/tom-1.mp3");
var keyA = new Key("sounds/tom-2.mp3");
var keyS = new Key("sounds/tom-3.mp3");
var keyD = new Key("sounds/tom-4.mp3");
var keyJ = new Key("sounds/crash.mp3");
var keyK = new Key("sounds/kick-bass.mp3");
var keyL = new Key("sounds/snare.mp3");

function Key (music){
    this.music = music;
    this.play = function(){
        var a = new Audio(music);
        a.play();
    }
}

document.addEventListener("keydown", onKeyPressed);

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", onClick);
}

function onKeyPressed(eventArgs){
    playMe(eventArgs.key);
}

function animateMe(keyCode){
    var kp = document.querySelector("." + keyCode);
    kp.classList.add("pressed");
    setTimeout(function(){kp.classList.remove("pressed")}, 200);
}

function onClick(){
    playMe(this.innerText);
}

function playMe(code){
    animateMe(code);
    switch (code) {
        case "w":
            keyW.play();
            break;
        case "a":
            keyA.play();
            break;
        case "s":
            keyS.play();
            break;
        case "d":
            keyD.play();
            break;
        case "j":
            keyJ.play();
            break;
        case "k":
            keyK.play();
            break;
        case "l":
            keyL.play();
            break;
    }
}

