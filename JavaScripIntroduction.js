let myName = "Gimena";

//Asking for a input
let yourName = prompt("What is you myName");

alert("My name is " + myName + ", welcome to my course " + yourName);
/* ---------------------------------------------------------------------- */

/*
Challenge:
  change the value of a to 3 and b to 8
*/
let a = 8;
let b = 3;

let c = a;
a = b;
b = c; 

console.log("a value is: " + a );
console.log("b value is: " + b );

/* ---------------------------------------------------------------------- */

/*
Challenge:
 Print the length of the tweet
*/ 
let tweet = prompt("Compose your tweet");
alert("You have written " + tweet.length() +" characters" );
/* ---------------------------------------------------------------------- */

/*
Challenge:
 Keep the array of only 140
*/
let tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
/* ---------------------------------------------------------------------- */

/*
Challenge:
    First letter upper case the other low case
*/
let firstLetter = yourName.slice(0,1);
let restName = yourName.slice(1, yourName.length );

alert("Hello " +firstLetter.toUpperCase() +restName.toLowerCase() );
/* ---------------------------------------------------------------------- */


/*
Challenge:
    Calculate the human Age of your dog
*/
dogAge = prompt("How old is your Dog?");
let humanAge = (dogAge -2 )*4 + 21;
alert("Your Dog human age is: " + humanAge );
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Calculate the amount of bottles you can buy
*/
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log( "Buy " + numberOfBottle(money) + " bottles of Milk" );
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function numberOfBottle(money) {
  return Math.floor(money/1.5);
   
}

getMilk(3);
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Calculate the time Left to live up to 90 years.
*/
function lifeInWeeks(age) {
  let yearsLeftToLive = 90 - age;

  //365 dias 52 weeks 12month
  console.log("You have " + yearsLeftToLive*365 + " days, " + yearsLeftToLive*52 + " weeks, and " + yearsLeftToLive*12 + " months left." );
  
}

lifeInWeeks(30);
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Calculate the BMI
*/
function bmiCalculator( weight, height){

  let bmi = weight/(height*height);
  
  return Math.round(bmi)  ;
}

let result = bmiCalculator(78, 1.68);
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Calculate the Love
*/
let n = Math.random();
n*=6;
n = Math.floor(n) + 1;
console.log(n);

prompt("Enter your name" );
prompt("Enter his name" );


let love = Math.random()*100;
alert(Math.floor(love));
/* ---------------------------------------------------------------------- */


/*
Challenge:
    Calculate the BMI with messages.
*/
function bmiCalculator (weight, height) {
     let bmi = weight/(height*height);
     bmi = bmi.toFixed(2);

    if(bmi < 18.50 ){        
        interpretation = "You BMI is " + bmi + ", so you are underweight" ;
    }else if( bmi < 24.9 ){
        interpretation = "You BMI is " + bmi + ", so you have a normal weight" ;
    }else{
        interpretation = "You BMI is " + bmi + ", so you are overweight" ;
    }
    return interpretation;
}
console.log (bmiCalculator(29, 1.25));
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Is a leap year
*/
function isLeap(year) {
    let result;

    if( year%4 === 0 ){
        if( year%400 === 0 ){
            result = "Leap year.";
        }else if(year % 100  == 0) {
            result = "Not leap year."; 
          } else {
            result = "Leap year.";
          }
        
    }else{
        result = "Not leap year."; 
    }
    return result;
}

console.log(isLeap(2024))
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Search your name
*/
yourName = prompt("What is you myName");

let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

let firstLetter = yourName.slice(0,1);
let restName = yourName.slice(1, yourName.length );

yourName = firstLetter.toUpperCase() + restName.toLowerCase() ;

if(guestList.includes(yourName)){
    alert("Welcome " + yourName);
    
}else{
    alert("Next Time");
}
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Fizz Buzz game
*/
let numbers = [];
for(let i = 1; i< 101 ; i++){
    if( (i % 3 === 0) && ( i % 5 === 0) ){
        numbers.push(" Fizz Buzz") ;
    }else if(i % 3 === 0){
         numbers.push(" Fizz") ;
    }else if( i % 5 === 0){
         numbers.push(" Buzz") ;
    }else{
        numbers.push(i);
    }
}

console.log(numbers);
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Who is paying
*/
function whosPaying(names) {

    let i = Math.floor(Math.random() * names.length);
    return names[i] + " is going to buy lunch today!";
    
}
let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(whosPaying(guestList));
/* ---------------------------------------------------------------------- */



/*
Challenge:
   Song 99 Bottles of Beers on the Wall
*/
function song99BottlesOfBeer() {
    let numberOfBottles = 99;
    let bottleWord = "bottle";
    
    while( numberOfBottles >= 0 ){
        
    
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
	if(numberOfBottles < 0){
		console.log("No more beer on the wall.");
	}else{
		console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
	}
    
        
    }

}
/* ---------------------------------------------------------------------- */

/*
Challenge:
    Fibonacci Generator
*/
function fibonacciGenerator(n) {
	
	let result = [];
	let suma = 0;
	
	for(let i = 0; i< n ; i++){
		if(i < 2){
			result.push(i);	
		}else{
			suma = result[i-2] + result[ i -1 ];
			result.push(suma);
		}
		
	}
	return result;
}

console.log(fibonacciGenerator(15));