
var randNumb1 = "./images/dice" + Math.ceil(Math.random()*6) + ".png";
var randNumb2 = "./images/dice" + Math.ceil(Math.random()*6) + ".png";

document.querySelector(".img1").setAttribute("src", randNumb1);
document.querySelector(".img2").setAttribute("src", randNumb2);

if(randNumb1 > randNumb2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
} else if(randNumb1 < randNumb2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML="It's a tie!";
}