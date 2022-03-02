// set the element to the p tag in the header and set the text to the current day 
var currentDayEl = document.getElementById("currentDay");
currentDayEl.innerText = "Today is " + moment().format("dddd, MMMM Do, YYYY");

// set variable to hold the text area
var descBlk = $(".textarea");

// variable to hold the current hour 
var hourNow = moment().format("k");
hourNow = 12;
// function to reload the page after 30 minutes
var reload = function() {
    setTimeout(function(){
        setTimeout(function(){
            location.reload(true);
        }, (60000*30));
    });
};

// function to run when the page first loads
$(document).ready(function(){

    // loop through the textareas and set the values to what is in local storage
    $(descBlk).each(function (){
        $(this).val(localStorage.getItem($(this).data("time")));
    })

    // call the reload function
    reload();

});

// loop throught the textarea by accessing the data index and comparing it to the current hour. If it's before the current hour assign it the past class, equals the current hour assign it the present class, and if it's after assign it the future class.
$(descBlk).each(function() {
    if ($(this).data("time") < hourNow){
        $(this).addClass("past");
        // disable the textarea and make it readonly
        $(this).attr("disabled", "readonly")
    } else if ($(this).data("time") > hourNow){
        $(this).addClass("future");
    } else {
        $(this).addClass("present"); 
    }
});

// if the text area is in focus, pluse the save icon to notify the user to save
$(".textarea").on("focus", function(){
    $(".saveTxt").addClass("pulse");
})

// save the inserted text to local storage
$(".saveTxt").on("click", function(){
    
    //remove the pluse from the icon
    $(".saveTxt").removeClass("pulse");
    
    // create local variables to hold the key value pairs
    var hour = "";
    var text = "";

    // loop through the text areas and set the key value pairs to local storage
    $(descBlk).each(function (){
        hour = $(this).data("time");
        text = $(this).val().trim();
        localStorage.setItem(hour, text);
    });
    
});


