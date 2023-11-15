// https://www.w3schools.com/js/js_reserved.asp

// Forces js to treat the code more strict.
// This will inform developers of load-time or run-time errors
// https://www.w3schools.com/js/js_strict.asp
"use strict";

/* Objects have properties & methods
  -There are many objects available to us developers
    - Built-in objects like Math and Random
    - DOM
    - BOM
  - use the (. notation) to reference items in an object
*/

// https://www.w3schools.com/jsref/obj_console.asp
console.log("Kathy Yang");
//alert("Kathy Yang");


// https://www.w3schools.com/jsref/jsref_obj_date.asp
var customDate = new Date("5/18/2021");
console.log("customDate: " + customDate);

var today = new Date();
console.log("today: " + today);

// https://www.w3schools.com/jsref/jsref_todatestring.asp
var readableDate = today.toDateString()
console.log("readable today: " + readableDate);
// https://www.w3schools.com/jsref/jsref_getday.asp
console.log("today's day is day " + today.getDay());

// build and h2 element in a string format
// note that the document object has methods to create elements
var dateMarkup = "<h2>" + readableDate + "</h2>";
// innerHTML if we have markup
document.getElementById("date").innerHTML = dateMarkup;

// get the element objects into variables
// https://www.w3schools.com/js/js_variables.asp
// https://www.w3schools.com/js/js_operators.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/jsref/dom_obj_document.asp
let leftOperandElement = document.getElementById("leftoperand");

console.log(leftOperandElement); // lets look at this in the console

let rightOperandElement = document.getElementById("rightoperand");
let answerElement = document.getElementById("answer");
let feedbackElement = document.getElementById("feedback");
let hintElement = document.getElementById("hint");

// this is another wayt to get elements by referencing elements the same way css does
let counterElement = document.querySelector("#counter");

console.log(counterElement); 

let submitButton = document.getElementById("checkbtn");
let skipButton = document.getElementById("skipbtn");
let hintButton = document.getElementById("hintbtn");

// hook up the button to an onclick event, so that when the button gets clicked
// it will trigger the event handlers
// notice that methods can be assigned by name, don't include the (), () will invoke/call the method
// when the user clicks the button, it will invoke/call the method by calling the method with the ()
// there are many available events, including double click, right click, mouse down, mouse up, mouse over, etc... 
// https://www.w3schools.com/jsref/dom_obj_event.asp
submitButton.onclick = checkAnswer;
skipButton.onclick = start;
hintButton.onclick = getHint;

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
answerElement.addEventListener("keypress", function(event)
{
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitButton.click();
  }
});

const counterStart = 1;
const counterStop = 10;
let countValue = counterStart;

var timer;

// invoke / call some function
start();

// a function named block of code {} that will run when it is called/invoked
function start()
{
  const maxNumber = 10;

// https://www.w3schools.com/jsref/dom_obj_all.asp
    leftOperandElement.textContent = getRandomNumber(maxNumber);
    rightOperandElement.textContent = getRandomNumber(maxNumber);
    answerFocusSelectText();

    counterElement.textContent = counterStart;

    // https://www.w3schools.com/jsref/met_win_clearinterval.asp
    clearInterval(timer);
    // https://www.w3schools.com/jsref/met_win_setinterval.asp
    timer = setInterval("updateCounter()", 1000); // 1000 = 1 second
}

function updateCounter()
{
  // get the value on the screen
  countValue = parseInt(counterElement.innerText);
  // re-assign to the screen the number that is incremented by 1
  // ++ before the variable means to increment by 1, then assign it
  // if the ++ is placed after the variable, it will assign the original value, then increment after
  //  which in this case, it will never happen, so you won't see the number change
  ++countValue;
  counterElement.textContent = countValue;

  // what could we do with this?
  // We can make this functional
  if (countValue > counterStop)
  {
    start();
  }
}

// Notice that this function is called from 2 functions
// This makes functions re-usable
function answerFocusSelectText()
{
    //console.log("selectText")

    // let's look to see what the focus and the select does
    // https://www.w3schools.com/jsref/dom_obj_all.asp
    answerElement.focus();
    answerElement.select();
}

function checkAnswer()
{
    //console.log("checkAnswer");

    // https://www.w3schools.com/jsref/dom_obj_attributes.asp
    var answer = answerElement.value;

    // https://www.w3schools.com/js/js_strings.asp
    // https://www.w3schools.com/js/js_string_methods.asp
    var nbrOfCharacters = answer.length;

    console.log("answer: " + answer + ", character length: " + nbrOfCharacters);

    // conversion: parseInt parses up to to first non-numeric value
    // https://www.w3schools.com/js/js_numbers.asp
    // https://www.w3schools.com/js/js_number_methods.asp
    // https://www.w3schools.com/js/js_type_conversion.asp
    let parasedAnswer = parseInt(answer);
    console.log("parasedAnswer: " + parasedAnswer);

    // check if the entered value is a numeric value
    // we can improve this by only accepting number values
    // https://www.w3schools.com/js/js_if_else.asp
    if (isNaN(parasedAnswer))
    {
        // Note: enter a string value before numeric value to hit this (let's test this)
        // https://www.w3schools.com/jsref/met_win_alert.asp
        alert("Please enter a numeric value");
    }

    // working with text string, so the answer is the result of the concatenation of the 2 strings
    //let leftValue = leftOperandElement.textContent;
    //let rightValue = rightOperandElement.textContent;

    // need to convert to numeric value to do math
    let leftValue = parseInt(leftOperandElement.textContent);
    let rightValue = parseInt(rightOperandElement.textContent);

    // https://www.w3schools.com/js/js_arithmetic.asp
    let sum = leftValue + rightValue;

    console.log("leftValue: " + leftValue + ", rightValue: " + rightValue + ", sum: " + sum);

    // decision/conditional logic
    // https://www.w3schools.com/js/js_if_else.asp
    if (sum == answer)
    {
        feedbackElement.textContent = "Correct!";
        //feedbackElement.style.color = "green";
        feedbackElement.classList.remove("red");
        feedbackElement.classList.add("green");
        start();
    }
    else
    {
        feedbackElement.textContent = "Try Again!";
        //feedbackElement.style.color = "red";
        feedbackElement.classList.remove("green");
        feedbackElement.classList.add("red");
    }

    // make the application easier for the user
    answerFocusSelectText();
}

function getHint()
{
    //console.log("getHint");

    var answer = answerElement.value;
    console.log("answer: " + answer);

    // conversion: parseInt parses up to to first non-numeric value
    let parasedAnswer = parseInt(answer);
    console.log("parasedAnswer: " + parasedAnswer);

    // check if the entered value is a numeric value
    // we can improve this by only accepting number values
    if (isNaN(parasedAnswer))
    {
        // Note: enter a string value before numeric value to hit this
        alert("Please enter a numeric value");
    }

    // working with text string, so the answer is the result of the concatenation of the 2 strings
    //let leftValue = leftOperandElement.textContent;
    //let rightValue = rightOperandElement.textContent;

    // need to convert to numeric value to do math
    let leftValue = parseInt(leftOperandElement.textContent);
    let rightValue = parseInt(rightOperandElement.textContent);

    let sum = leftValue + rightValue;

    console.log("leftValue: " + leftValue + ", rightValue: " + rightValue + ", sum: " + sum);

    // comparison
    // https://www.w3schools.com/js/js_comparisons.asp
    if (sum == answer)
    {
        displayHintMessage("The answer is correct!");
    }
    else if (answer > sum)
    {
        displayHintMessage("The answer is less than " + answer);
    }
    else if (answer < sum)
    {
        displayHintMessage("The answer is greater than " + answer);
    }

    answerFocusSelectText();
}

// this function takes in 1 parameter
// It is also called multiple times, making it a re-usable function and easy to maintain
function displayHintMessage(message)
{
  hintElement.textContent = message;
}