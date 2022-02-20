//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ["red", "green", "black"];

//CODE HERE
const colorCopy = faveColors.slice();
console.log(colorCopy);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push("blue");
console.log(colorCopy);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

//CODE HERE
const middleNum = numbers.splice(1, 3);
console.log(middleNum);
//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE
function bigOrSmall(arr) {
  var answers = [];
  for (let i = 0; i > 100; i++) {
    if (arr > 100) {
      return answers.push("big");
    } else return answers.push("small");
  }
}
console.log(50);

function passwordVal(password) {
  if (password.length >= 10) {
    return "good";
  } else {
    return "bad";
  }
}
console.log(passwordVal("1111111111"));

let goo = [2, 3, 4];
for (let i = 0; i < goo.length; i++) {
  console.log(goo[i]);
}
