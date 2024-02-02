// Simon game starts here

var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];

var gameStart = false;
var level = 0;
var score = -1;

$(document).keypress(function () {
    if (!gameStart) {
        $('#level-title').text("Level " + level);
        $("#score").text("Current score : " + score);
        newSequence();
        gameStart = true;
    }
});

$(".btn").click(function () {

    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1)
});
// Check user Patter to random chosen pattern
function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                newSequence();
            }, 1000);
        }
    }    else {

        var audio = new Audio("sounds/wrong.mp3");
        audio.play(); 

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any key to restart");
        
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#score").text("Final score : " + score);
        startOver();
      }
}
// COmputer guessing function for game
function newSequence() {
    userClickedPattern = [];
    level++;
    score++;
    $("#level-title").text("Level " + level);
    $("#score").text("Current score : " + score);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(150).fadeIn(100);
    playSound(randomChosenColor);
}
// Function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play()
}
// Fucntion to animate on User Click
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}
// Game restart
function startOver() {
    level = 0;
    score = -1;
    gamePattern = [];
    gameStart = false;
}