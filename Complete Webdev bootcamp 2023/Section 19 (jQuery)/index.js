$("h1").css("color", "red");

// $("a").attr("href", "https://www.youtube.com/")
// $("a").attr("target", "_blank");

$("h1").click(function(){
    $("h1").toggleClass("magma");
});

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });
$("input").click(function(){
    $("h1").slideUp().animate({opacity: 0.2}).slideDown();
});