"use strict";

document.querySelector("#greetFromCommon").onclick = commonSayHi;

/* Note: Because webpages can use multiple js files, we have to be careful of the naming global variable
    Otherwise, we run the risk of the files unintentionally referencing/using variables
    incorrectly
*/
var greeting = "hello from common.js";

function commonSayHi()
{
  document.querySelector("#commongreeting").textContent = greeting;
}

// https://www.w3schools.com/js/js_functions.asp (let's review this, with parameters and the return value)
function getRandomNumber(maxNumber)
{
    // Math is a built in object that has methods, which are like functions) which can be called/invoked
    // Notice that when we use it, we don't need to know the logic, we just need to know what to call
    // When naming variables, properties, methods and functions, we want to name it with something that 
    //  is representative. This helps us understand what it might be just by looking at the name
    // https://www.w3schools.com/jsref/jsref_obj_math.asp
    let randomNumber = Math.random();
    let rangeNumber = randomNumber * maxNumber;
    let roundedNumber = Math.round(rangeNumber);

    // let take a look at this in the cosole
    console.log("randomNumber: " + randomNumber + ", rangeNumber: " + rangeNumber + ", roundedNumber: " + roundedNumber);

    // get a random number between 0 - maxNumber
    return roundedNumber;
}