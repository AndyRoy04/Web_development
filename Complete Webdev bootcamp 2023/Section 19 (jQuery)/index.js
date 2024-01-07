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
});https://www.figma.com/file/k9twzOISZwhjSRA5aIVwRx/Flux---Figma-Build-Tutorial-(Starter)-(Community)?type=design&node-id=203-2&mode=design&t=uPO7fUiE5KjYkHsm-11