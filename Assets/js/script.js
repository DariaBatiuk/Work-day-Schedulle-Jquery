// shows the current time

// import dayjs library
// import dayjs from "dayjs";

$(document).ready(function () {

  let currentDate = dayjs().format("dddd, MMM D YYYY");
  $("#currentDay").html(currentDate);
  console.log(currentDate);

  let currentTime = dayjs().format("HH");
  console.log(currentTime);

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
  let hour9 = $("#h9");
  let hour10 = $("#h10");
  let hour11 = $("#h11");
  let hour12 = $("#h12");
  let hour13 = $("#h13");
  let hour14 = $("#h14");
  let hour15 = $("#h15");
  let hour16 = $("#h16");
  let hour17 = $("#h17");

  // check if property exists before accessing it
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour9")) {
    hour9.val(JSON.parse(localStorage.getItem("taskObject")).hour9);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour10")) {
    hour10.val(JSON.parse(localStorage.getItem("taskObject")).hour10);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour11")) {
    hour11.val(JSON.parse(localStorage.getItem("taskObject")).hour11);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour12")) {
    hour12.val(JSON.parse(localStorage.getItem("taskObject")).hour12);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour13")) {
    hour13.val(JSON.parse(localStorage.getItem("taskObject")).hour13);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour14")) {
    hour14.val(JSON.parse(localStorage.getItem("taskObject")).hour14);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour15")) {
    hour15.val(JSON.parse(localStorage.getItem("taskObject")).hour15);
  }
  if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour16")) {
    hour16.val(JSON.parse(localStorage.getItem("taskObject")).hour16);
	}
	if (JSON.parse(localStorage.getItem("taskObject")).hasOwnProperty("hour17")) {
    hour17.val(JSON.parse(localStorage.getItem("taskObject")).hour17);
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
