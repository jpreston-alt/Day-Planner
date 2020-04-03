# Day-Planner

## About

This application is a simple calendar app that displays the current day, and allows the user to schedule out their work day by saving notes to hourly time blocks. The user may add as many items to each block as they choose. To provide the user with an idea of where they are in their day at a glance, the colors of the time blocks update depending on what time of day it is. Gray represents past hours, red for current hour, and green are hours that are still to come. The user may add an item to their schedule by simply typing it in to a time block, then clicking the save button next to that block. The users data is stored locally and will persist when page is refreshed. When they're ready to start a new work day they may click the Clear All button to delete everything and start over.

Building this scheduler taught me alot about leveraging JavaScript libraries to improve functionality and write cleaner, more simplified code. I learned about the magic of jQuery in simplifying manipulation of the DOM and event handling. I was also introduced to the moment.js library, which makes working with dates and time in JavaScript much simplier. I utilized this library to create the dynamic date in the header, and to change the color of the time blocks depending on the current time of day. Overall I learned that the power of libraries is that they improve your code by simplifying everyday tasks, while still allowing you the freedom to control the flow of your application by choosing where and when the library is used.



![](day_planner.gif)


## Technologies

* JavaScript
* jQuery
* Moment.js
* Bootstrap 4
* HTML
* CSS


## How to Use

* Type in a note or to-do into any of the time blocks
* Click the save button next to that time block to save that item to your schedule
* To delete a single item highlight the text you wish you delete, then click the save button again
* To delete all items click the clear all button at the bottom of the page

## Deployed Site

https://jpreston-alt.github.io/Day-Planner/