

// Dice Player 1
let dicePlayer1 = Math.floor(Math.random()*6 + 1);

let imageName = "./images/dice" + dicePlayer1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", imageName);


// Dice Player 2
let dicePlayer2 = Math.floor(Math.random()*6 + 1);

imageName = "./images/dice" + dicePlayer2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", imageName);

/* When we have more than one selector and we want to select all not only the FIRST one,
we use querySelectorAll
* */

// Who wins?
let result;
if( dicePlayer1 > dicePlayer2 ){
    result = "🚩 Player 1 Wins!";
}else if( dicePlayer1 === dicePlayer2){
    result = " 🚩 Draw 🚩 " ;
}else {
    result = "🚩 Player 2 Wins!";
}

document.querySelector("h1").innerHTML = result;