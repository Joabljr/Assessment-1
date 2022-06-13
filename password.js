console.log(`                                      
__    __            __  __           
|  \  |  \          |  \|  \          
| $$  | $$  ______  | $$| $$  ______  
| $$__| $$ /      \ | $$| $$ /      \ 
| $$    $$|  $$$$$$\| $$| $$|  $$$$$$\
| $$$$$$$$| $$    $$| $$| $$| $$  | $$
| $$  | $$| $$$$$$$$| $$| $$| $$__/ $$
| $$  | $$ \$$     \| $$| $$ \$$    $$
 \$$   \$$  \$$$$$$$ \$$ \$$  \$$$$$$ " `);

let welcome = alert("Welcome to the password validator tool");
let password = prompt("Please enter your password:");

if (password.length < 10) {
  alert("Sorry, your password is too short! Try Again!");
} else {
  alert("Welcome!");
}
