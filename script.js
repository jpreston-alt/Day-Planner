// * Create Timeblocks in HTML
//      - 9AM-5PM
// * Create submit buttons in HTML
// * Style timeblocks/ buttons

// * Get needed elements from HTML
var currentDayEl = $("#currentDay");
var hourEl = $(".hour");





// * Create global variables
var entriesArr = [];

// * Create currentDay variable that stores the current day from the moment object
var currentDay = moment();

// Format current day to day of the week, month, date, and year
var currentDayHeader = currentDay.format("dddd, MMMM Do, YYYY");
var currentHour = currentDay.format("H");


// * Create event handler that stores function to store users entries in entires array when they click the save button
//      -holds time in array
//      -holds entry in array

$(document).ready(function() {
    $(".input-group").on("submit", function() {
        event.preventDefault();
        console.log("clicked!");
        console.log($("textarea").val());

    })
});




// * Create a function that stores entries array in local storage

// * Create an event handler that listens to when a user clicks the submit button, and stores that entry in local storage

// Create a function that renders the information from local storage and displays it on the DOM
//      - only pull IF there is information to pull

// Create a function that colors the time block based on what time of day it is:
//      - past hour (if hour < currentHour)
//      - current hour (if hour === currentHour)
//      - future hours (if hour > current Hour)
function colorize() {
    for (var i = 9; i < 18; i++) {
        var description = $("#" + i + "-description")
        var hour = parseInt(currentHour);
        if (hour === parseInt(description.attr("data-time"))) {
            description.addClass("present");
        } else if (hour > parseInt(description.attr("data-time"))) {
            description.addClass("past");
        } else if (hour < parseInt(description.attr("data-time"))) {
            description.addClass("future");
        };
    }
};









// Create an initialize function that:
//      - pulls users entries from local storage
//      - calls function to render items from local storage to the DOM
//      - calls function that colors timeblocks based on time

function init() {
    // * Insert current day into HTML header
    currentDayEl.text(currentDayHeader);
    colorize();
};



// * Create debugger function
var deBug = false;
function deBugger() {
    if (deBug === true) {
        console.log(currentDay);
        console.log(currentDayHeader);
        console.log(currentHour);
        console.log(hourEl.text());
    }
};

// Run debugger function
deBugger();

// Call init function
init();


