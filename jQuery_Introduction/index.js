
// $("h1").css("color", "red");

$("h1").addClass('big-class');

//$("button").text("YEs!");

/* Two ways of doing the same thing.
* one simple javaScript
* one using jQuery*/

// for( let i = 0; i < 5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function (){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function(){
//      $("h1").css("color", "purple");
//
// })

/* ---------------------------------------------------------- */


// $("h1").on("mouseover", function (){
//    $("h1").fadeTaggle();
// });

$("button").click(function(){
    $("h1").fadeToggle();
    // $("h1").css("color", "purple");

})