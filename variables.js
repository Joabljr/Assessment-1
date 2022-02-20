//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE
var myName = "JJ";
console.log(myName);
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
var faveNum = 13;
console.log(faveNum);
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
var lovesCode = true;
console.log(lovesCode);
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
var faveNum = 13;
if (faveNum == 13) {
  console.log("lucky 13!");
} else console.log("not lucky 13");
//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/
//CODE HERE
var faveNum = 7;

for (let i = 1; i <= 5; i++) {
  console.log(faveNum);
}

var analysisOfRequirements =
  "Business requirements are gathered in this phase. This phase is the main focus of the project managers and stake holders.Meetings with managers, stake holders and users are held in order to determine the requirements like; Who is going to use the system? How will they use the system? What data should be input into the system? What data should be output by the system? These are general questions that get answered during a requirements gathering phase. After requirement gathering these requirements are analyzed for their validity and the possibility of incorporating the requirements in the system to be development is also studied.";
console.log(analysisOfRequirements);

var DesignD =
  "In this phase the system and software design is prepared from the requirement specifications which were studied in the first phase. System Design helps in specifying hardware and system requirements and also helps in defining overall system architecture. The system design specifications serve as input for the next phase of the model.";
console.log(DesignD);
