/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition =
  "Global Tnformation Tracker. Genearlly used for saving your coding and exchanging code information.";
console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition =
  "GitHub is a code hosting platform for collaboration and version control.";
console.log(gitHubDefinition);
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
var init = {
  decription:
    "init script initializes the service. So, it responsible for initializing the system.",
  code: "console.log(init)",
};
console.log(init);
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
var clone = {
  decription: "In order to copy to the repository.",
  code: "console.log(clone)",
};
console.log(clone);
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
var status = {
  decription: "checks the status of the file your working on.",
  code: "console.log(status)",
};
console.log(clone);
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
var add = {
  decription: "To add a all changed files of a directory.",
  code: "console.log(add)",
};
console.log(add);
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
var commit = {
  decription: "In Git, commit is the term used for saving changes.",
  code: "console.log(commit)",
};
console.log(commit);
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
var push = {
  decription:
    "se git push to push commits made on your local branch to a remote repository.",
  code: "console.log(push)",
};
console.log(push);
