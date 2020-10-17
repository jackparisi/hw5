//<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

//var currentDay = 
var currentHour = moment().hour();
var currentMin = moment().minute();
var currentTime = currentHour + ":" + currentMin;
var date = moment().date();
var month = moment().month();
var curMonth = month + 1;
var year = moment().year();
var currentDate = curMonth + "/" + date + "/" + year;
var fullDate = $(document).ready(function(){
    var time = moment().format('LLLL');
$("#currentDay").text(time);
});
//var nowHour = now().hour()
//logging to see if time works
console.log(currentHour);
console.log(currentMin);
console.log(currentTime);
console.log(date);
console.log(curMonth);
console.log(year);
console.log(currentDate);
console.log(fullDate);
//appending the header to add current date and time
//$("#currentDay").append(currentDate + " " + currentTime);

//saving input text 
$(".9am").click(function(e){
    e.preventDefault();
    var task9 = $("#task9am").val().trim();
    console.log(task9);
    $("#task9am").text(task9);
    localStorage.setItem("#task9am", task9);
    
});$(".10am").click(function(){
    var task10 = $("#task10am").val().trim();
    console.log(task10);
    localStorage.setItem("#task10am", task10);
});
$(".11am").click(function(){
    var task11 = $("#task11am").val().trim();
    console.log(task11);
    localStorage.setItem("#task11am", task11); 
});
$(".12pm").click(function(){
    var task12 = $("#task12pm").val().trim();
    console.log(task12);
    localStorage.setItem("#task12pm", task12);
});
$(".1pm").click(function(){
    var task1 = $("#task1pm").val().trim();
    console.log(task12);
    localStorage.setItem("#task1pm", task1);
});
$(".2pm").click(function(){
    var task2 = $("#task2pm").val().trim();
    console.log(task12);
    localStorage.setItem("#task2pm", task2);
});
$(".3pm").click(function(){
    var task3 = $("#task3pm").val().trim();
    console.log(task3);
    localStorage.setItem("#task12pm", task3);
});
$(".4pm").click(function(){
    var task4 = $("#task4pm").val().trim();
    console.log(task4);
    localStorage.setItem("#task4pm", task4);
});
$(".5pm").click(function(){
    var task5 = $("#task5pm").val().trim();
    console.log(task5);
    localStorage.setItem("#task5pm", task5);
});
$(".6pm").click(function(){
    var task6 = $("#task6pm").val().trim();
    console.log(task6);
    localStorage.setItem("#task6pm", task6);
});
$(".7pm").click(function(){
    var task7 = $("#task7pm").val().trim();
    console.log(task7);
    localStorage.setItem("#task7pm", task7);
});
$(".8pm").click(function(){
    var task12 = $("#task8pm").val().trim();
    console.log(task8);
    localStorage.setItem("#task8pm", task8);
});
$(".9pm").click(function(){
    var task9pm = $("#task9pm").val().trim();
    console.log(task9pm);
    localStorage.setItem("#task9pm", task9pm);
});
