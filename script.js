//task - 1
const weekday = document.getElementById("weekday");
const time = document.getElementById("time");

const weekdayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
let day = weekdayList[date.getDay()];

weekday.innerText = "Today is : " + day;
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
console.log(h);

let suffix = h >= 12 ? " PM " : " AM ";
h = h >= 12 ? h - 12 : h;
if (h === 0 && suffix === " PM ") {
  if ((m === 0) & (s === 0)) {
    h = 12;
    suffix = " Noon";
  } else {
    h = 12;
    suffix = "PM";
  }
}
if (h === 0 && suffix === " AM ") {
  if (m === 0 && s === 0) {
    h = 12;
    suffix = "Midhight";
  } else {
    h = 12;
    suffix = " AM ";
  }
}

time.innerText = "Current time is : " + h + suffix + " : " + m + " : " + s;

//task - 2
const printBtn = document.getElementById("print");

printBtn.addEventListener("click", () => window.print());

//task-3
const currentDateParagraph = document.getElementById("current-date");

let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

currentDateParagraph.innerText =
  "Current date is : " + currentMonth + "/" + currentDay + "/" + currentYear;
