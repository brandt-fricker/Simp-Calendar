
var time = luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_24_SIMPLE)
console.log(time+" Actual Time")
var calHour = document.querySelectorAll('.hour')
var hour = luxon.DateTime.local().toFormat("HH")
console.log(hour+" Military time")
// var description = document.querySelectorAll(".description");
// console.log(description)
// var milTime = document.querySelectorAll(".hour").textContent
// console.log(milTime)
var time1 = document.getElementById("timeblock1").textContent
var time2 = document.getElementById("timeblock2").textContent
var time3 = document.getElementById("timeblock3").textContent
var time4 = document.getElementById("timeblock4").textContent
var time5 = document.getElementById("timeblock5").textContent
var time6 = document.getElementById("timeblock6").textContent
var time7 = document.getElementById("timeblock7").textContent
var time8 = document.getElementById("timeblock8").textContent
var time9 = document.getElementById("timeblock9").textContent

var arr=[time1,time2,time3,time4,time5,time6,time7,time8,time9]

for (let i = 0; i < arr.length; i++) {
   var checkTime = arr[i].slice(0,2);
   console.log(checkTime)
   if(checkTime === hour){
    document.getElementById("see").style.background = "indianred"
   }else if (checkTime < hour ){
       document.getElementById("see").style.background = "lightgrey"
   }else{
       console.log("add stuff here")
   }
        
    }
// document.getElementById("see").style.background = "indianred"



// document.querySelectorAll('.saveBtn').forEach(item => {
//     item.addEventListener("click", event => {
//         alert("You Saved Me!")
//     })
// })


$(".saveBtn").on("click", function() {
    alert("I've been clicked!");
    
    
  });





