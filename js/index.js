var nr1 = getRandomNumber();
var nr2 = getRandomNumber();

function getRandomNumber(){
return Math.floor(Math.random() * 6) + 1;
}

function getRandomImage(nr){
    return "images/dice" + nr + ".png";
}

function changeHeaderText(nr1, nr2){
    if(nr1 > nr2)
        document.querySelector("h1").innerHTML = "🧨Player1 wins";
    else if (nr2 > nr1)
        document.querySelector("h1").innerText = "Player2 wins 🎈";
    else
        document.querySelector("h1").innerText = "Draw";
}

document.querySelector(".img1").setAttribute("src", getRandomImage(nr1));
document.querySelector(".img2").setAttribute("src", getRandomImage(nr2));
changeHeaderText(nr1, nr2);
