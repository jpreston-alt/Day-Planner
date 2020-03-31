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


// * Create event handler for every time the user clicks the save button:
//      - pushes entry and time to entries array
//      - saves entries array to local storage 

$(document).ready(function() {

    $(".input-group").on("submit", function(event) {
        event.preventDefault();

        var entry = $(this).children("textarea").val()
        var time = $(this).find("p").text();

        entriesArr.push({ time: time, entry: entry });

        JSONentriesArr = JSON.stringify(entriesArr);

        localStorage.setItem("entries", JSONentriesArr);
    });

});


// Create a function that pulls from local storage- only pull IF there is information to pull
function getStorage() {
    var entries = localStorage.getItem("entries");
    var JSONentries = JSON.parse(entries);

    if (JSONentries !== null) {
        entriesArr = JSONentries;
        renderEntries();
    }
};

// Create a function that renders entries from local storage to the DOM
function renderEntries() {
    for (var i = 0; i < entriesArr.length; i++) {
        for (var j = 9; j < 18; j++) {
            if (entriesArr[i].time === $("#" + j + "-hour").text()) {
                console.log("they match!")
                $("#" + j + "-description").text(entriesArr[i].entry);
            }
        }
    }
};


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
    getStorage();
};


// Call init function
init();


