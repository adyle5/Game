var character = document.getElementById("character");
var block= document.getElementById("block");
var score = document.getElementById("score");

function jump() { 
    if (character.classList != "animate") {
        character.classList.add("animate");
        
        score.innerText = parseInt(score.innerText) + 1;

        if (parseInt(score.innerText) == 10) {
            block.style.animation = "none";
             block.style.display = "none";
            alert("You Win!!!");
        }
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var check = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 34 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";

        alert("Game Over");
    }
}, 10);

function start() {
    location.reload();
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
}