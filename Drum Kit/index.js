
// Listening to the Button in HTML
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
            this.style.color = "yellow";

            let buttonInertHTML = this.innerHTML;
            makeSound( buttonInertHTML );
            buttonAnimation( buttonInertHTML );
    }

    );

}

// Listening to the KEYBOARD
document.addEventListener("keydown", function ( event ){
    makeSound(event.key);
    buttonAnimation (event.key);
});

function makeSound( key ){
    let audio;
    switch ( key ){
        case "w":
            audio =  new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            audio =  new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            audio =  new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            audio =  new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            audio =  new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            audio =  new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            audio =  new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("Error");
    }
}

function buttonAnimation(key) {
    let keyClass = "." + key;
    let activeButton = document.querySelector(keyClass);

    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}