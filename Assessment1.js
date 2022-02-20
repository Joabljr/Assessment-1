console.log("Hello New User");

prompt("Create Your Password!");

var passwordCheck = function (password) {
  if (password.length >= 8) {
    return "Your password is SUCCESSFUL";
  } else return "Your password is NOT good enough";
};

console.log(passwordCheck("password"));

var passwordCheck2 = function (password) {
  if (password.length <= 20) {
    return "Your password is SUCCESSFUL";
  } else return "Your password is TOO LONG";
};

console.log(passwordCheck2("password"));
