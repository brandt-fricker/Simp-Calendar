console.log(luxon.DateTime.local().toFormat("HHMM"));
console.log(luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_24_SIMPLE))


for (let i = 0900; i < 1800; i++) {
    $(".container").append(buildTimeSlot(i))
    
}


function buildTimeSlot(hour){
    var timeSlot = $("<div>")
    .attr("id", "hour-" +hour)
    .attr("class", "row time-block")
    var timeLabel = $("<div>")
    if(hour >= 12){
        timeLabel.text(hour -12 + "PM");
    }else{
        timeLabel.text(hour + "AM")
    }
    var textArea = $("<textarea>")
    .attr("class", "col-md-10 description")
    var btn = $("button")
    .attr("class", "btn saveBtn col-md-1")
    .append($("<i>").attr("class", "fas fa-save"))
}