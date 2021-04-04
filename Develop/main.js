//render current date in the required format: Day, Date
const displayCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, Do [of] MMMM YYYY");
  dateTime.text(displayNow);
};

const renderCalendarEvents = () => {
  //get data from local
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    // const currentHour = moment().hour();
    const currentHour = 11;
    const timeBlocks = $(".container .row");
    const callback = function () {
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      if (timeBlockTime === currentHour) {
        // use the find method to find the textarea and replace class past with present
        $(this).find("textarea").removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        // use the find method to find the textarea and replace class past with future
        $(this).find("textarea").removeClass("past").addClass("future");
      }
    };
    console.log(timeBlocks);
    timeBlocks.each(callback);
    // console.log();
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
  //get from the local storage

  //check if data is null

  //render the  data in the planner

  //
};
const onReady = () => {
  console.log("I am ready");
  displayCurrentDate();

  renderCalendarEvents();
};

$("document").ready(onReady);
