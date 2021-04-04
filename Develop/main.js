//render current date in the required format: Day, Date
const displayCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, Do [of] MMMM YYYY");
  dateTime.text(displayNow);
};

const renderCalendarEvents = () => {
  //get data from local
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    const currentHour = moment().hour();
    // const currentHour = 11;
    const timeBlocks = $(".container .row");
    const callback = function () {
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      if (timeBlockTime === currentHour) {
        //target the div using this and use the find method to find the textarea and replace class past with present
        $(this).find("textarea").removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        // use the find method to find the textarea and replace class past with future
        $(this).find("textarea").removeClass("past").addClass("future");
      }
      // get the variable that has the key name in the memory
      const plannedEvent = plannerEvents[timeBlockTime];

      //store the plannedEvent in the textarea
      $(this).find("textarea").text(plannedEvent);
    };

    timeBlocks.each(callback);
    // console.log();
  } else {
    //add an empty array in the local storage
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
  //get from the local storage

  //check if data is null

  //render the  data in the planner

  //
};
const onReady = () => {
  displayCurrentDate();
  renderCalendarEvents();
};

$("document").ready(onReady);
