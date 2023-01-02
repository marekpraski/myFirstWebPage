var gamePattern = [];
var userClickedPattern = [];
var isGameStarted = false;
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber;
var randomChosenColour;
var randomChosenButton;

var allButtons = document.querySelectorAll(".btn");

for(var i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", whenClicked);
}

document.addEventListener("keydown", startGame);

function startGame(){
    if(!isGameStarted)
        nextSequence();
    isGameStarted = true; 
}

function nextSequence(){
    level++;
    userClickedPattern = [];
    document.querySelector("h1").innerText = ("Level " + level);
    randomNumber = generateRandomNumber();
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    randomChosenButton = document.querySelector("." + randomChosenColour);
    flashButton(randomChosenButton);   
}

function checkAnswer(index){
    if(gamePattern[index] !== userClickedPattern[index])
        gameOver();
    else if(index === gamePattern.length - 1)
        setTimeout(nextSequence,500);
}

function gameOver(){
    gamePattern = [];
    userClickedPattern = [];
    isGameStarted = false;
    level = 0;
    document.querySelector("h1").innerText = "Game over, Press A Key to Restart";
}

function whenClicked(){
    var btnClicked = this.id;
    userClickedPattern.push(btnClicked);
    playSound(btnClicked);
    flashButton(this);
    checkAnswer(userClickedPattern.length - 1);
}

function generateRandomNumber(){
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
