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
let sec = date.getSeconds();
console.log(h);

let suffix = h >= 12 ? " PM " : " AM ";
h = h >= 12 ? h - 12 : h;
if (h === 0 && suffix === " PM ") {
  if ((m === 0) & (sec === 0)) {
    h = 12;
    suffix = " Noon";
  } else {
    h = 12;
    suffix = "PM";
  }
}
if (h === 0 && suffix === " AM ") {
  if (m === 0 && sec === 0) {
    h = 12;
    suffix = "Midhight";
  } else {
    h = 12;
    suffix = " AM ";
  }
}

time.innerText = "Current time is : " + h + suffix + " : " + m + " : " + sec;

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

//task-3
const areaTriangleParag = document.getElementById("area-triangle");

let side1 = 5;
let side2 = 6;
let side3 = 7;

//s - for semiPerimeter
let s = (side1 + side2 + side3) / 2;
console.log(s);
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

areaTriangleParag.innerText =
  "The area of a triangle where lengths of the three of its sides are 5, 6, 7 is : " +
  area;

//task -5

const rotateBtn = document.getElementById("rotateBtn");
// const el = document.getElementById("rotate-word");
// console.log(el);

function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  console.log(textNode);
  var text = textNode.data;
  console.log(text.length);
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 300);
}
rotateBtn.addEventListener("click", () => animate_string("rotate-word"));

//task - 6

const currentYearParag = document.getElementById("now");
const isLeapYear = document.getElementById("leapAnswer");

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

currentYearParag.innerText = currentYear;
isLeapYear.innerText = leapYear(currentYearParag) ? " " : " not";

//task - 7
const JanuarySundayYears = document.getElementById("januarySunday");

for (let year = 2014; year <= 2050; year++) {
  let d = new Date(year, 0, 1);
  if (d.getDay() === 0) {
    const yearList = document.createElement("p");
    yearList.innerText = "1st January is being a Sunday " + year;
    JanuarySundayYears.appendChild(yearList);
    // console.log(typeof yearList);
  }
}

//task - 8
// 1-way

const inputEl = document.getElementById("guessInput");
const guessBtnEl = document.getElementById("guessBtn");
const resultText = document.getElementById("result");

function startGuessgame() {
  const num = Math.ceil(Math.random() * 10);
  let userNum = +inputEl.value;
  console.log(num);
  console.log(userNum);
  if (userNum <= 10 && userNum >= 1) {
    if (num === userNum) {
      console.log("Greate Job");
      resultText.innerText = "Greate Job";
    } else {
      console.log("Not matched");
      resultText.innerText = "Not matched";
    }
  } else {
    alert("A number must be between 1 to 10 ");
  }
}

guessBtnEl.addEventListener("click", () => startGuessgame());

//task - 8
// 2-way
const guessBtnEl2 = document.getElementById("guessBtn2");
// console.log(guessBtnEl2);

function startGuess() {
  const num = Math.ceil(Math.random() * 10);
  let userNumber = prompt(
    "Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number."
  );
  console.log(typeof userNumber);

  if (userNumber === null) {
    alert("Bye!");
    return;
  } else {
    userNumber = +userNumber;
  }

  if (userNumber <= 10 && userNumber >= 1) {
    if (num === userNumber) {
      alert("Greate Job");
    } else {
      alert("Not matched");
    }
  } else {
    prompt("A number must be between 1 to 10 ");
  }
}

guessBtnEl2.addEventListener("click", startGuess);
