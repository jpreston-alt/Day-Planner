// Create Global Variables
//  -needed elements from HTML
//  -entries array
//  -current day/time using moment object

var entriesArr = [];
var currentDay = moment();
var currentHour = currentDay.format("H");
var currentDayHeader = currentDay.format("dddd, MMMM Do, YYYY");
var currentDayEl = $("#currentDay");


// Colors each time block by adding a class, colored based on hour displayed in time block compared to current hour
function colorBlocks() {
    var descriptionEl = $(".description");
    var hour = parseInt(currentHour);

    // loops through each description
    descriptionEl.each(function () {
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


// Adds event listeners
$(document).ready(function() {

    // when user clicks a save button
    $(".input-group").on("submit", function(event) {
        event.preventDefault();

        // saves value of text area and time to variables
        var entry = $(this).find("textarea").val()
        var timeVar = $(this).find(".hour").text();

        // filter entries array so any entries with the same time are deleted
        var filterArr = entriesArr.filter(function(arr){
            return arr.time !== timeVar;
        });

        // push new entry and time into entries array
        filterArr.push({ time: timeVar, entry: entry });
        entriesArr = filterArr;

        // push array to local storage
        pushStorage();
    });

    // when user clicks clear button
    $("#clear-btn").on("click", function(event) {
        event.preventDefault();

        $("textarea").val("");
        entriesArr = [];
        pushStorage();
    })
});


// Saves entries array to local storage
function pushStorage() {
    JSONentriesArr = JSON.stringify(entriesArr);
    localStorage.setItem("entries", JSONentriesArr);
};


// Pulls entries from local storage and renders to DOM
function getStorage() {
    var entries = localStorage.getItem("entries");
    var JSONentries = JSON.parse(entries);

    // only save to array and render if there are entries stored in local storage
    if (JSONentries !== null) {
        entriesArr = JSONentries;
        renderEntries();
    }
};


// Renders entries from local storage to the DOM
function renderEntries() {
    
    // loops through entries array pulled from storage
    for (var i = 0; i < entriesArr.length; i++) {
        var hourEl = $(".hour");

        // for each hour element
        hourEl.each(function() {
            var description = $(this).parent().next();

            // if time block hour matches entry array hour, render this entry to this timeblock
            if (entriesArr[i].time === $(this).text()) {
                description.text(entriesArr[i].entry);
            }
        })
    };
};


// Defines an initialize function - pulls from local storage, inserts current day into header, colors time blocks
function init() {
    getStorage();
    currentDayEl.text(currentDayHeader);
    colorBlocks();
};


// Call init function
init();


