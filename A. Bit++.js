const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function getLines(n) {
  const lines = [];
  let count = 0;

  function processLine(line) {
    lines.push(line);
    count++;

    if (count === n) {
      rl.close();
      let sum = 0;
      lines.forEach((l) => {
        if (l.includes("-")) {
          sum -= 1;
        } else {
          sum += 1;
        }
      });
      console.log(sum);
    } else {
      rl.question("", processLine); // Request next line
    }
  }

  rl.question("", processLine); // Request the first line
}

function main() {
  rl.question("", (n) => {
    const numLines = parseInt(n, 10);
    if (isNaN(numLines) || numLines <= 0) {
      console.error("Invalid input. Please enter a positive integer.");
      rl.close();
      return;
    }
    getLines(numLines);
  });
}

main();
