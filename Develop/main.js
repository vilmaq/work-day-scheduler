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
};
//define onClick function
const onClick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  const target = $(event.target);

  if (target.is("button")) {
    console.log("save button click");
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    const newObject = {
      ...plannerEvents,
      [key]: value,
    };
    localStorage.setItem("plannerEvents", JSON.stringify(newObject));
    console.log(key, value);
    console.log(plannerEvents);
  }
};
const onReady = () => {
  //set event listener on container
  //target the container first
  $(".container").click(onClick);
  displayCurrentDate();
  renderCalendarEvents();
};

$("document").ready(onReady);
