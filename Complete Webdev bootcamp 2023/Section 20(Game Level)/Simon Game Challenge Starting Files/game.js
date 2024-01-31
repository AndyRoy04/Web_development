// Simon game starts here
var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];

$(".btn").click(function(){
    var userChosenColor = $(this).attr('id');


});

function newSequence(){
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(150).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3" );
    audio.play();       
}

