"use strict";

document.querySelector("#greetFromInteractive").onclick = interactiveSayHi;

function interactiveSayHi()
{
  /* greeting is a global variable from common.js
    - is it appropriate to get changed here?
    - what happens if it was changed to something unexpected, what will happen to the code then?
  */
  greeting = "hi from interactive.js";

  document.querySelector("#interactivegreeting").textContent = greeting;
}

// add events to the buttons
document.getElementById("randomNumberGeneratorStart").onclick = startRandomNumberGenerator;
document.getElementById("randomNumberGeneratorStop").onclick = stopRandomNumberGenerator;

/* when there is going to be more than 1 usages of timed and interval code,
    make sure to assign them to variables
*/
var randomNumberDisplayInterval;
var randomNumberGeneratorTimeout;

function startRandomNumberGenerator()
{
  /* display a random number every 1 second
      https://www.w3schools.com/jsref/met_win_setinterval.asp
  */
  randomNumberDisplayInterval = setInterval("displayRandomNumber()", 1000);
}

function stopRandomNumberGenerator()
{
  clearInterval(randomNumberDisplayInterval);
  clearTimeout(randomNumberGeneratorTimeout);
}

function displayRandomNumber()
{
    var randomNumber = getRandomNumber(20);
    // textContent if we only have to insert text
    document.getElementById("randomNumber").textContent = randomNumber;

    /* put a delay to make sure the value gets updated before we pull it
        https://www.w3schools.com/jsref/met_win_settimeout.asp
    */
    randomNumberGeneratorTimeout = setTimeout(displayPreviousNumber, 500);
}

function displayPreviousNumber()
{
    var previousNumber = document.getElementById("randomNumber").textContent;
    document.getElementById("previousNumber").textContent = previousNumber;
}

/* array - stores a collection of data. data is still in index position where the index starts at 0.
  https://www.w3schools.com/js/js_arrays.asp
*/

// array literal, declare and initialize the array with values
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days);

// we can declare an empty array with the [].
// then, place values in a specific index location by using the [<index>] syntax
var days2 = [];
days2[0] = "Sunday";
days2[1] = "Monday";
days2[2] = "Tuesday";
days2[3] = "Wednesday";
days2[4] = "Thursday";
days2[5] = "Friday";
console.log(days2);

/* arrays have methods that makes its usage dynamic and easy to work with
  https://www.w3schools.com/js/js_array_methods.asp
*/

days2.push("Saturday");
console.log(days2);

/* if items are stored sequentially, the .length property can be relied on to 
    get an appropriate 'count'. Otherwise, .length just return the number of elements
    in the array
*/
var daysCount1Element = document.querySelector("#daysCount1");
daysCount1Element.textContent = days.length;

var daysCount2Element = document.querySelector("#daysCount2");
daysCount2Element.textContent = days.length;

writeDayNameUsingForLoop();

function writeDayNameUsingForLoop()
{
    // new query selector
    var daysList1Element = document.querySelector("#daysList1");

    var daysCount = days.length;
    var dayStructure = "";

    /* for loop 
        https://www.w3schools.com/js/js_loop_for.asp
    */
    for (var index = 0; index < daysCount; index++)
    {
        // get the value in the specified index location using the [<index>] syntax
        var day = days[index];

        // build the html element string, notice an id assigned to the list item
        dayStructure += "<li id=daylist1-day" + index + " class=day" + index + ">" + day + "</li>";
    }

    // use the innerHTML to add markup
    daysList1Element.innerHTML = dayStructure;
}

//writeDayNameUsingForEachMethod();

function writeDayNameUsingForEachMethod()
{
    // new query selector
    var daysList2Element = document.querySelector("#daysList2");

    var dayStructure = "";

    /* Arry.forEach method
        https://www.w3schools.com/jsref/jsref_foreach.asp
    */

    /* Review the Syntax and Parameters
      - notice the 3rd parameter of the function. This is optional.
        - if the code needs to use the array, then pass it in, if not, then leave it out
    */
    days2.forEach((currentValue, index, days2) => 
    {
        var day = currentValue;

        // 2) then build the string with the result
        dayStructure += "<li id=daylist2-day" + index + " class=day" + index + ">" + day + "</li>";
    });

    // use the innerHTML to add markup
    daysList2Element.innerHTML = dayStructure;
}

//createDaysList3FromHTMLElements();

function createDaysList3FromHTMLElements()
{
  // https://www.w3schools.com/jsref/met_document_queryselector.asp
  // returns the first element
  var daysList3Element = document.querySelector("#daysList3");

  // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
  // returns all elements
  var daysList1Elements = document.querySelectorAll("#daysList1 li");
  console.log(daysList1Elements);

  var daysCount3 = daysList1Elements.length;

  daysList1Elements.forEach((currentValue, index) => 
  {
        var dayListElement = currentValue;
        console.log(dayListElement);

        // https://www.w3schools.com/jsref/met_node_clonenode.asp
        var dayListElementClone = dayListElement.cloneNode(true);

        // update the id on the element
        dayListElementClone.id = "daylist3-day" + index;

        // https://www.w3schools.com/jsref/met_node_appendchild.asp
        daysList3Element.appendChild(dayListElementClone);
    });

  // use the textContent to add content
  document.querySelector("#daysCount3").textContent = daysCount3;
}

//add event to the start random day highlight button
document.querySelector("#dayListHighlightStart").onclick = dayListHighlightStart;


//add event to the stop random day highlight button
document.querySelector("#dayListHighlightStop").onclick = dayListHighlightStop;


function dayListHighlightStart(){
  //get the first list of days
  var dayList1Element = document.querySelector("#daysList1");

  //remove any highlighted days
  dayListHighlightStop();

  //choose a random item in this list
  var randomNumber = getRandomNumber(7);

  //get the random item in the list
  var dayToHighlight = dayList1Element.childNodes[randomNumber];
  dayToHighlight.classList.add("highlight");

}

function dayListHighlightStop(){
  //get the first list of days
  var dayList1Element = document.querySelector("#daysList1");

  //remove any highlighted days
  var highlightedDays = dayList1Element.querySelectorAll(".highlight");
  highlightedDays.forEach((currentValue, index) => 
  {
    currentValue.classList.remove("highlight");
  });
}