// const = seeTime;
const dateInLA = new Date();
const timeInLA = dateInLA.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"});

const seeTime = document.querySelector(".time")

const timeContainer = document.querySelector(".time-nyc")

let timeHolder = document.querySelector(".time-holder")
console.log(typeof timeHolder)
function showTime() {
    console.log("clicked")
    console.log(timeInLA)
  timeContainer.classList.toggle("display-none")
  timeHolder.textContent = timeInLA
//   nav.classList.toggle("nav-active")
};

