

//Loads the date on top of page at page load
$(window).on("load", function(){
    var currentDay = moment().format("MMMM dddd Do YYYY");
$("#currentDay").append(currentDay);
})
// global variables 
var tb = [document.querySelector("#timeblock1"), document.querySelector("#timeblock2"),
document.querySelector("#timeblock3"),
document.querySelector("#timeblock4"),
document.querySelector("#timeblock5"),
document.querySelector("#timeblock6"),
document.querySelector("#timeblock7"),
document.querySelector("#timeblock8"),
document.querySelector("#timeblock9")]


var callHour = document.querySelectorAll('.hour')
var callRow = document.querySelectorAll(".description")
var hour = luxon.DateTime.local().toFormat("HH")
//for loop to check the time and reference it to the divs with color
// indianred===current hour
//lightgrey===hours past
//lightblue===hours still to come
for (let i = 0; i < callHour.length; i++) {
    var checker = callHour[i].innerHTML.slice(0,2);
    
    if(checker === hour && hour === tb[i].innerHTML.slice(0,2)){
        tb[i].nextElementSibling.style.background = "indianred"
    }else if(checker<hour && hour > tb[i].innerHTML.slice(0,2)){
        tb[i].nextElementSibling.style.background = "lightgrey"
    }else{
        tb[i].nextElementSibling.style.background = "lightblue"
    }
}
var saveButton = document.querySelectorAll(".saveBtn")

$(saveButton).on("click",function(){
    alert("You saved me!")
})