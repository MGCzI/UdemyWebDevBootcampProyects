
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;


document.addEventListener("keydown", function ( event ){
    if( !gameStarted ){
        gameStarted = true;
        nextSequence();
    }
    console.log("Key detected ");
});


$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer( level );

});

// Select the next random color and save it.
function nextSequence() {
    // Reset variables
    userClickedPattern = [];

    //Changing H1 title
    level ++;
    $("#level-title").text("Level " + level);

    // Choosing the next sequel
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Flash the button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(colour) {
    let audioPath = "sounds/" + colour + ".mp3";
    let audio = new Audio(audioPath);
    audio.play();

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


function checkAnswer( currentLevel ){
    console.log("on Check Answer");
    if( ( userClickedPattern.length === currentLevel) && gameStarted ){
        //Check for the answer
        for( let i = 0; i <gamePattern.length; i++ ){
            if( gamePattern[i] !== userClickedPattern[i] ){
                //Error, make sound and reset the game
                console.log("wrong");
                endGame();
                return undefined;
            }
        }
        console.log("success");
        setTimeout(function () {
            nextSequence();
        }, 1000);

    }
}

function endGame(){
    console.log("En Game");

    playSound(wrong);

    $("body").addClass("game-over");
    $("#level-title").text("Game over, Press Any Key to Restart");

    setTimeout( function (){
        $("body").removeClass("game-over");
    }, 200);


    //Reset the variables.
    userClickedPattern = [];
    gamePattern = [];
    gameStarted = false;
    level = 0;
}
