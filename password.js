const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Hello, please enter a password", function (input) {
  password = String(input);
  let symbolCheck = password.includes(
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "?"
  );
  console.log(symbolCheck);
  if (password === "password") {
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
  } else if (password.length > 9 && symbolCheck === false) {
    console.log(`Error:
    
________________________________________
< Only letters and numbers please. >
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
