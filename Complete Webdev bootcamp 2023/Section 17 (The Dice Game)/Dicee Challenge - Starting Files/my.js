$("input").click(function(){
var randomDice1 = "./images/dice" + Math.ceil(Math.random()*6) + ".png";
var randomDice2 = "./images/dice" + Math.ceil(Math.random()*6) + ".png";

$(".image1").attr("src", randomDice1);
$(".image2").attr("src", randomDice2);

if(randomDice1 > randomDice2){
    $("h1").text("Player 1 is victorious");
} else if(randomDice1 < randomDice2){
    $("h1").text("Player 2 Wins")
} else {
    $("h1").text("A tie");
}
})