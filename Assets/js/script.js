//shows the current time

let currentDate = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").html(currentDate);
let hour = document.querySelectorAll(".description");
let hour9 = document.getElementById("h9");
console.log(JSON.parse(localStorage.getItem("taskObject")).hour10);



hour9.value = JSON.parse(localStorage.getItem("taskObject")).hour9;

let currentTime = dayjs().format("hh:mm");

// function initilizeLocalStorage() {
//   // getting data from LS
//   const taskObjInLocalStorage = JSON.parse(localStorage.getItem("taskObject")) || {};

//   // console.log(objDescrNodes, "objDescrNodes");
//   console.log(taskObjInLocalStorage, "taskObjInLocalStorage");

// }
// initilizeLocalStorage();

$(document).ready(function () {
  // Add a listener for click events on the save button.
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();

    // localStorage.setItem(time, text);

    //retrieve object from ls
    let taskObject = JSON.parse(localStorage.getItem("taskObject"));

    //   we add/replace new/existing data in the object from LS
    const newObject = {
      ...taskObject,
      [time]: text,
    };

    console.log(newObject);
    // push the updated object back to LS
    localStorage.setItem("taskObject", JSON.stringify(newObject));

    // push into that array
    // put that new array back into ls
  });

  // for(let i=0; i<)
  //function for changing the css style
  // function changeStyle() {
  //   let stopTime = $(this).parent().attr("id");
  //   if (stopTime < currentTime) {
  //     $(this).removeClass("future");
  //     $(this).removeClass("present");
  //     $(this).addClass("past");
  //   } else if (stopTime === currentTime) {
  //     $(this).removeClass("past");
  //     $(this).removeClass("future");
  //     $(this).addClass("present");
  //   } else {
  //     $(this).removeClass("present");
  //     $(this).removeClass("past");
  //     $(this).addClass("future");
  //   }
  // }
  // changeStyle();
});
