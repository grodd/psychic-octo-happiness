const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function getLines(n) {
  let count = 0;
  let lines = [];
  function processLine(line) {
    line = line.toLowerCase();
    lines.push(line);
    count++;

    if (count === n) {
      rl.close();
      let compScore = 0;
      for (let i = 0; i < lines[0].length; i++) {
        const char1 = lines[0][i];
        const char2 = lines[1][i];
        if (char1 < char2) {
          compScore = -1;
          break;
        } else if (char2 < char1) {
          compScore = 1;
          break;
        }
      }
      console.log(compScore);
    } else {
      rl.question("", processLine); // Request next line
    }
  }

  rl.question("", processLine); // Request the first line
}

function main() {
  const n = 2;
  const numLines = parseInt(n, 10);
  if (isNaN(numLines) || numLines <= 0) {
    console.error("Invalid input. Please enter a positive integer.");
    rl.close();
    return;
  }
  getLines(numLines);
}

main();
