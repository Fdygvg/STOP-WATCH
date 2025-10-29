//variables for buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for time values
var seconds = 0;
var minutes = 0;
var hours = 0;
//Vaariable for interavl and timer status
let timerInterval = null;
let timerStatus = "stopped";

// stop watch function
function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let leadingSeconds = seconds.toString().padStart(2, "0");
  let leadingMinutes = minutes.toString().padStart(2, "0");
  let leadingHours = hours.toString().padStart(2, "0");

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"> </i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"> </i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"> </i>`;

  document.getElementById("timer").innerText = "00:00:00";
});
