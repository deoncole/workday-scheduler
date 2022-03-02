// set the element to the p tag in the header and set the current day
var currentDayEl = document.getElementById("currentDay");
var time = $(".timeBlk");
var row = $(".row");
var descBlk = $(".textarea");
currentDayEl.innerText = "Today is " + moment().format("dddd, MMMM Do, YYYY");
var hourNow = moment().format("k");

$(descBlk).each(function() {
    if ($(this).data("time") < hourNow){
        // console.log("less than 11");
        $(this).addClass("past");
    } else if ($(this).data("time") > hourNow){
        console.log("more than 11");
        $(this).addClass("future");
    } else {
        // console.log("is 11");
        $(this).addClass("present");
    }
});

