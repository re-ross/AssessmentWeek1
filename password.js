const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter password", function (input) {
  tokens = String(input);

  userPass = tokens;

  if (userPass.length < 10) {
    console.log("Not enough characters");
  } else if (userPass.length > 9) {
    console.log("Success!");
  } else console.log("Failure!");
});
