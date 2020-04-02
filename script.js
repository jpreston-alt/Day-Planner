// Create Global Variables
//  -needed elements from HTML
//  -entries array
//  -current day/time using moment object

var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var entriesArr = [];
var currentDay = moment();
var currentHour = currentDay.format("H");
var currentDayHeader = currentDay.format("dddd, MMMM Do, YYYY");


// Adds event handler for every time the user clicks a save button:
$(document).ready(function() {

    $(".input-group").on("submit", function(event) {
        event.preventDefault();

        // saves value of text area and time to variables
        var entry = $(this).find("textarea").val()
        var timeVar = $(this).find(".hour").text();

        // filter entries array so any entries with the same time are deleted
        var filterArr = entriesArr.filter(function(e){
            return e.time !== timeVar;
        });

        // push new entry and time into entries array
        entriesArr = filterArr.push({ time: timeVar, entry: entry });

        // saves entries array to local storage
        JSONentriesArr = JSON.stringify(entriesArr);
        localStorage.setItem("entries", JSONentriesArr);
    });
});


// Defines a function that pulls entries from local storage and renders to DOM
function getStorage() {
    var entries = localStorage.getItem("entries");
    var JSONentries = JSON.parse(entries);

    // only save to array and render if there are entries stored in local storage
    if (JSONentries !== null) {
        entriesArr = JSONentries;
        renderEntries();
    }
};


// Defines a function that renders entries from local storage to the DOM
function renderEntries() {

    // loops over entries array
    for (var i = 0; i < entriesArr.length; i++) {

        // loops over hour elemnts from HTML - saves to correct time block if times match
        for (var j = 9; j < 18; j++) {
            if (entriesArr[i].time === $("#" + j + "-hour").text()) {
                $("#" + j + "-description").text(entriesArr[i].entry);
            }
        }
    }
};


// Defines a function that colors each time block 
//  -by adding a different class
//  -based on time of day compared to current hour
function colorBlocks() {

    // loops through description elements 
    for (var i = 9; i < 18; i++) {
        var descriptionEl = $("#" + i + "-description")
        var hour = parseInt(currentHour);
        if (hour === parseInt(descriptionEl.attr("data-time"))) {
            descriptionEl.addClass("present");
        } else if (hour > parseInt(descriptionEl.attr("data-time"))) {
            descriptionEl.addClass("past");
        } else if (hour < parseInt(descriptionEl.attr("data-time"))) {
            descriptionEl.addClass("future");
        };
    }
};


// Defines an initialize function
function init() {

    // pulls from local storage
    getStorage();

    // Insert current day into header
    currentDayEl.text(currentDayHeader);

    // colors time blocks
    colorBlocks();
};


// Call init function
init();


