// Create Global Variables
//  -needed elements from HTML
//  -entries array
//  -current day/time using moment object

var entriesArr = [];
var currentDay = moment();
var currentHour = currentDay.format("H");
var currentDayHeader = currentDay.format("dddd, MMMM Do, YYYY");
var currentDayEl = $("#currentDay");


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
        filterArr.push({ time: timeVar, entry: entry });
        entriesArr = filterArr;

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
    for (var i = 0; i < entriesArr.length; i++) {
        var hourEl = $(".hour");

        hourEl.each(function() {
            var description = $(this).parent().next();

            if (entriesArr[i].time === $(this).text()) {
                description.text(entriesArr[i].entry);
            }
        })
    };
};


// Defines a function that colors each time block 
//  -by adding a different class
//  -based on time each block represents compared to current hour
function colorBlocks() {
    var descriptionEl = $(".description");
    var hour = parseInt(currentHour);

    descriptionEl.each(function() {
        var hourData = parseInt($(this).attr("data-time"));
        
        if (hour === hourData) {
            $(this).addClass("present");
        } else if (hour > hourData) {
            $(this).addClass("past");
        } else if (hour < hourData) {
            $(this).addClass("future");
        };
    })
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


