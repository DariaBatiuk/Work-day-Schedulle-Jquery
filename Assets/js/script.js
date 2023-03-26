// shows the current time

// import dayjs library
// import dayjs from "dayjs";

let currentDate = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").html(currentDate);
console.log(currentDate);

let currentTime = dayjs().format("HH");
console.log(currentTime);

$(document).ready(function () {
  // Add a listener for click events on the save button.
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();

    // retrieve object from ls
    let taskObject = JSON.parse(localStorage.getItem("taskObject"));
    console.log(taskObject);

    // we add/replace new/existing data in the object from LS
    const newObject = {
      ...taskObject,
      [time]: text,
    };
    console.log(newObject);

    // push the updated object back to LS
    localStorage.setItem("taskObject", JSON.stringify(newObject));
  });

  // getting data from LS and pushing this into textarea.value
  let hour9 = document.getElementById("h9");
  let hour10 = document.getElementById("h10");
  let hour11 = document.getElementById("h11");
  let hour12 = document.getElementById("h12");
  let hour13 = document.getElementById("h13");
  let hour14 = document.getElementById("h14");
  let hour15 = document.getElementById("h15");
  let hour16 = document.getElementById("h16");
  let hour17 = document.getElementById("h17");

  // check if property exists before accessing it
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour9")) {
    hour9.value = JSON.parse(localStorage.getItem("taskObject")).hour9;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour10")) {
    hour10.value = JSON.parse(localStorage.getItem("taskObject")).hour10;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour11")) {
    hour11.value = JSON.parse(localStorage.getItem("taskObject")).hour11;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour12")) {
    hour12.value = JSON.parse(localStorage.getItem("taskObject")).hour12;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour13")) {
    hour13.value = JSON.parse(localStorage.getItem("taskObject")).hour13;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour14")) {
    hour14.value = JSON.parse(localStorage.getItem("taskObject")).hour14;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour15")) {
    hour15.value = JSON.parse(localStorage.getItem("taskObject")).hour15;
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour16")) {
    hour16.value = JSON.parse(localStorage.getItem("taskObject")).hour16;
	}
 




  function changeStyle() {		
		let timeBlocks = document.querySelectorAll(".time-block");
		console.log(timeBlocks);
		// timeBlocks.forEach(function(el) {
		for (let i = 0; i < timeBlocks.length; i++) {		
				var stopTime = parseInt(timeBlocks[i].id.split("hour")[1]);
				//console.log(timeBlocks[i]);
				console.log(stopTime);
				if (stopTime < currentTime) {
					timeBlocks[i].classList.remove("future");
					timeBlocks[i].classList.remove("present");
					timeBlocks[i].classList.add("past");
				} else if (stopTime == currentTime) {
					timeBlocks[i].classList.remove("past");
					timeBlocks[i].classList.remove("future");
					timeBlocks[i].classList.add("present");
				} else {
					timeBlocks[i].classList.remove("present");
					timeBlocks[i].classList.remove("past");
					timeBlocks[i].classList.add("future");
				}
		}
  }
  changeStyle();
});
