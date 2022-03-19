// alert("welcome to the world of javascript");
// prompt("is there anything exciting about this???");

// // variables//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var myName = "Marvellous";
// var mySurname= "Dirisu";

// // >>>>>>>>>>>>>>>>>>>>> to switch both names, create a new variable to hold myName
// var otherName = myName;
// myName = mySurname;
// mySurname = otherName;

// console.log("my name is " + otherName + " and my surname is " + myName);

// // strings length and retriving numbers of characters
// var tweet = prompt("compose your tweet");
// var tweetCount = tweet.length;
// alert("you have written " + tweetCount + " characters, and you have "+ (140 - tweetCount) + " characters remaining");

// // var tweet = prompt("compose your tweet");
// // alert("you have written " + tweet.length + " characters, and you have "+ (140 - tweet.length) + " characters remaining");

// // slice
// var name = "Marvis";
// name.slice(0,5);

// var tweet = prompt("compose your tweet");
// var tweetCount = tweet.slice(0,148);
// alert(tweetCount);

// // var tweet = prompt("compose your tweet");
// // alert(tweet.slice(0,148));

// var nam = prompt("what is your name?");
// nam = nam.toUpperCase();
// alert("hello, " + nam);

// // changing the first letter of names to upper case////////////////////////////////////////////////////////////
// var yourName = prompt("Welcome, what is your name?");
// // removes first letter of your name
// yourNameFirstChar = yourName.slice(0,1); 
// // changes first character of your name to upper case
// var yourNameFirstChar = yourNameFirstChar.toUpperCase();
// // removes remaining letters of your name
// yourNameRest = yourName.slice(1,yourName.length);
// // changes rest letters of your name to lower case
// var yourNameRest = yourNameRest.toLowerCase();
// // sums up the first letter of your name and remaining letters
// yourName = yourNameFirstChar + yourNameRest;
// alert ("hello, " + yourName);
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // functions////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     onsole.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     // Math.floor() rounds up the number/////////////////////////
//     var amount = Math.floor(bottles/1.5)
//     console.log("buy" + amount + " bottles of milk");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }

// getMilk(8);

// life in weeks challenge///////////////////////////////////////////////////////////////

function lifeInWeeks(age) {
    var daysAge = (90 - age) * 365;
    var weeksAge = (90 - age) * 52;
    var monthsAge = (90 - age) * 12;

console.log("You have " + daysAge + " days, " + weeksAge + " weeks " + monthsAge + " months left.");
}
lifeInWeeks(27);


//Body Mass Index Calculator //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function bmiCalculator(weight, height){
    var bodyMass = Math.floor(weight / (height * height));
    // alternatively, Math.pow(base, exponent) sums a number by it's square so instead of saying (weight / (height * height)), we can say(weight / Math.pow(height, 2))
    return bodyMass; 
}
bmiCalculator(65, 1.8);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function bmiCalculator(weight, height){
//     var bodyMass = Math.round(weight / Math.pow(height, 2));

//     if((bodyMass >0 && bodyMass < 18.5){
//         console.log("Your BMI is " + bodyMass + ", so you are underweight.");
//     }
//     if(bodyMass >= 18.5 && bodyMass <= 24.9){
//         console.log("Your BMI is " + bodyMass + ", so you have a normal weight.");
//     }
//     if(bodyMass > 24.9){
//         console.log("Your BMI is " + bodyMass + ", so you are overweight.");
//     }
// }
// bmiCalculator(65, 1.8);

function bmiCalculator(weight, height){
    var bodyMass = Math.round(weight / Math.pow(height, 2));

    var underWeight = "Your BMI is " + bodyMass + ", so you are underweight.";
    var normalWeight = "Your BMI is " + bodyMass + ", so you have a normal weight.";
    var overWeight = "Your BMI is " + bodyMass + ", so you are overweight.";

    if(bodyMass >0 && bodyMass < 18.5){
        return underWeight;
    }
    if(bodyMass >= 18.5 && bodyMass <= 24.9){
        return normalWeight;
    }
    if(bodyMass > 24.9){
        return overWeight;
    }
}
bmiCalculator(65, 1.8);


// random numbers (love calculator)
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
// love calculator
prompt("your name");
prompt("partner's name");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
alert(n + "%");

// conditionals also called control flow(if and else statement)///////////////////////////////////////////////////////////////////////////
// if(contition){
//     performThis();
// }
// else {
//     performThis();
// }
prompt("your name");
prompt("partner's name");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("your love score is " + loveScore + "%: you love each othr like Romeo and Juliet");
} else {
    alert("your love score is " + loveScore + "%");
}

// leap year challenge
function isLeap(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "leap year"
            } else {
                return "not leap year"
            }
        } else{
            return "leap year"
        }
    } else{
        return "not leap year"
    }
}

// FizzBuzz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var output = [];
var count = 1;

function fizzBuzz(){
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;

    console.log(output);
}

// who's buying lunch////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function whosBuying (names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = math.floor(math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today";
}


// bottle of beers
var numberOfBottles = 99
function buyBeer () {
    while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
}