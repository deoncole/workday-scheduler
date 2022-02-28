// set the element to the p tag in the header and set the current day
var currentDayEl = document.getElementById("currentDay");
currentDayEl.innerText = "Today is " + moment().format("dddd, MMMM Do, YYYY, h:mm a");