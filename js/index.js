var btns = document.querySelectorAll(".drum");
for(var i = 0; btns.length; i++){
    btns[i].addEventListener("click", onClick);
}

function onClick(){
    alert("I got clicked");
}