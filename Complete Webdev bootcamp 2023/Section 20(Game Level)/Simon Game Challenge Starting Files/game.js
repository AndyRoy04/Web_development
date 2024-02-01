// Simon game starts here

var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];

var gameStart = false;
var level = 0;

$(document).keypress(function(){
    gameStart = true;
    if(gameStart){
        $('#level-title').text("Level " + level);
        newSequence();
    }   
});

$(".btn").click(function(){

    var userChosenColor = $(this).attr('id');     
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1)
});

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        // console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                newSequence();
            }, 1000);
        }
        
    } else{
        // console.log("failure");
    }
}


function newSequence(){

    userClickedPattern = [];
    level++;

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(150).fadeIn(100);
    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3" );
    // audio.play(); 
    playSound(randomChosenColor);

}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3" );
    audio.play() 
}


function animatePress(currentColor) {

        $("#" + currentColor).addClass("pressed");   
        
        setTimeout(function(){
            $("#" + currentColor).removeClass("pressed");
        }, 100);

}

