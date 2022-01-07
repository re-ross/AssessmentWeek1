const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter password", function (input) {
  password = String(input);

  if (password.length < 10) {
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
    
console.log(________________________________________
< Password saved! >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
  } else console.log("Failure!");
});
