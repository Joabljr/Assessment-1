console.log("Hello New User");

prompt("Create Your Password!");

var passwordCheck = function (password) {
  if (password.length >= 8) {
    return "Your password is SUCCESSFUL";
  } else return "Your password is NOT good enough";
};

console.log(passwordCheck("password"));
