// * Create Timeblocks in HTML
//      - 9AM-5PM
// * Create submit buttons in HTML
// * Style timeblocks/ buttons

// * Get needed elements from HTML
var currentDayEl = $("#currentDay");




// * Create global variables

// * Create currentDay variable that stores the current day from the moment object
var currentDay = moment();

// Format current day to day of the week, month, date, and year
var currentDayHeader = currentDay.format("dddd, MMMM Do, YYYY");

// * Insert current day into HTML header
currentDayEl.text(currentDayHeader);




// * Create entries array or object
//      - holds users entry
//      - holds time
// * Store entries array in local storage
// * Create an event handler that listens to when a user clicks the submit button, and stores that entry in local storage
// Create an init function that pulls users entries from local storage
// Create a function that renders the information from local storage and displays it on the DOM
//      - only pull IF there is information to pull
// Create a function that colors the time block based on what time of day it is
//      - past hours
//      - current hour
//      - future hours





// * Create debugger function
var deBug = true;
function deBugger() {
    if (deBug === true) {
        console.log(currentDay);
        console.log(currentDayHeader);
    }
};

// Run debugger function
deBugger();


