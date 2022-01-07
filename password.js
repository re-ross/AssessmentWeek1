const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Hello, please enter a password", function (input) {
  password = String(input);
  if ((password = "password")) {
    console.log("Be a little more creative, please.");
  } else if (password.length < 10) {
    console.log(`Failure:
    
 ________________________________________
< Not enough characters >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
  } else if (password.length > 9) {
    console.log(`Success:
    
________________________________________
< Password saved! >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
  } else console.log("Failure!");
});
