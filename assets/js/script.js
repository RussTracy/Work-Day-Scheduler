var events = {};
var currentDay = moment().format("dddd, MMMM Do");
var hour9 = moment().set("hour", 9).format("h A")
var hour10 = moment().set("hour", 10).format("h A")
var hour11 = moment().set("hour", 11).format("h A")
var hour12 = moment().set("hour", 12).format("h A")
var hour13 = moment().set("hour", 13).format("h A")
var hour14 = moment().set("hour", 14).format("h A")
var hour15 = moment().set("hour", 15).format("h A")
var hour16 = moment().set("hour", 16).format("h A")
var hour17 = moment().set("hour", 17).format("h A")

$("#currentDay").text(currentDay);

$(document).ready(function () {
    var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
    $.each(hours, function (index, value) {
        $(".container").append("<div class='row'><div class='col-2 hour text-right'>" +
            value + "</div><div class='col-8 event'><ul class='event-group' id='hour" +
            (index + 9) + "'><li class='event-group-item'><p class='m-1'></p></li></ul></div>" +
            "<div class='col-2 saveBtn'><i class='fas fa-save'></i></div></div></div>");
    });

});

