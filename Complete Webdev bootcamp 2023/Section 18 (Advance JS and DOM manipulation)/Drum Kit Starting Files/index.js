
// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

// function handleClick(){
//     var buttonPressed = this.innerHTML;
//     makeSound(buttonPressed);

//     buttonAnimation(buttonPressed);
// }
// }
// // Detecting keyboard press
// document.addEventListener("keypress", function(event){
//     makeSound(event.key);

//     buttonAnimation(event.key);
//     // console.log(event.key);
// });

// function makeSound(value){

//     switch (value) {
//         case "w":
//             var crash = new Audio("../Drum Kit Starting Files/sounds/crash.mp3");
//             crash.play();
//             break;
//         case "a":
//             var kickbass = new Audio("../Drum Kit Starting Files/sounds/kick-bass.mp3");
//             kickbass.play();
//             break;
//         case "s":
//             var snare = new Audio("../Drum Kit Starting Files/sounds/snare.mp3");
//             snare.play();
//             break;
//         case "d":
//             var tom2 = new Audio("../Drum Kit Starting Files/sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "j":
//             var tom1 = new Audio("../Drum Kit Starting Files/sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "k":
//             var tom3 = new Audio("../Drum Kit Starting Files/sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "l":
//             var tom4 = new Audio("../Drum Kit Starting Files/sounds/tom-4.mp3");
//             tom4.play();
//             break;
    
//         default:
//             break;
//     }
// }

// function buttonAnimation(currentKey){
//     var activeButton = document.querySelector(`.${currentKey}`);
//     activeButton.classList.toggle('pressed');
//     setTimeout(function(){
//         activeButton.classList.toggle('pressed')}, 100);
// }

// mouse detection
$(".drum").on("click", handleClick);
function handleClick(){
    var buttonClicked = $(this).html();
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
}

// keyboard detection
$(document).keypress(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Sound Production
function makeSound(value){
    switch (value) {
        case "w":
            var crash = new Audio("../Drum Kit Starting Files/sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("../Drum Kit Starting Files/sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("../Drum Kit Starting Files/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom2 = new Audio("../Drum Kit Starting Files/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom1 = new Audio("../Drum Kit Starting Files/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            var tom3 = new Audio("../Drum Kit Starting Files/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("../Drum Kit Starting Files/sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }
}

// Animation production
function buttonAnimation(currentKey) {
//     var activeButton = $(`.${currentKey}`);
//     activeButton.addClass('pressed');
//     setTimeout(function() {
//         activeButton.removeClass('pressed');
//     }, 100);
}