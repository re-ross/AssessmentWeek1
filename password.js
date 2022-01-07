const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter password", function (input) {
  password = String(input);

  if (password.length < 10) {
    console.log("Not enough characters");
  } else if (password.length > 9) {
    console.log("Success!");
  } else console.log("Failure!");
});
