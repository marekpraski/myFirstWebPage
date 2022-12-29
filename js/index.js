var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = nextSequence();
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
var currentButton = document.querySelector("." + randomChosenColour);

var allButtons = document.querySelectorAll(".btn");

for(var i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", whenClicked);
}

function nextSequence(){
    return Math.floor(Math.random() * 3) + 1;
}

function flashButton(button){
    button.classList.add("pressed");
    setTimeout(function(){button.classList.remove("pressed");}, 200);
}

function playSound(button){
    var sound = new Audio("sounds/" + button + ".mp3");
    sound.play();
}

function whenClicked(){
    flashButton(currentButton);
    playSound(randomChosenColour);
}