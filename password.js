const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter password", function (input) {
  tokens = input.split();

  userPass = tokens;
  console.log(userPass);
  console.log("--------");
  if (userPass.length < 10) {
    console.log(userPass.length);
    console.log("--------");
    console.log("Not enough characters");
  } else if (userPass.length >= 10) {
    console.log("Success!");
  } else console.log("Failure!");
});
