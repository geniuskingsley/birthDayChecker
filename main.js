/**
 *
 * @Genius
 * ALWAYS TRYING MY HANDS ON SOMETHING WHILE I AM BORED.
 *
 * THIS JUST EASY STUFF...
 * 1. TAKE INPUT FROM USER (IN NUMBER)
 * 2. RETURN THE DAY OF THE WEEK, WITH OUR DATE
 */

const prompt = require("prompt-sync")();

console.log(`DATE FOMART \n  " YYYY-MM-DD " `);

let date = prompt("Please Enter a day :").toString();

function dayFinder(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day.getDay()];
}

let weekDay = new Date(date);
console.log(dayFinder(weekDay));
