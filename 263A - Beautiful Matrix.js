const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function getLines(n) {
  const lines = [];
  let count = 0;
  const beautifulRow = 3;
  const beautifulCol = 3;
  function processLine(line) {
    lines.push(line);
    count++;

    if (count === n) {
      rl.close();
      let uglyRow = -1;
      let uglyCol = -1;
      lines.forEach((l, rowIndex) => {
        if (uglyRow === -1 && uglyCol === -1) {
          const matRow = l.split(" ");
          matRow.forEach((value, colIndex) => {
            if (parseInt(value) === 1) {
              uglyRow = rowIndex + 1;
              uglyCol = colIndex + 1;
            }
          });
        }
      });

      const noOfMoves =
        Math.abs(beautifulRow - uglyRow) + Math.abs(beautifulCol - uglyCol);
      console.log(noOfMoves);
    } else {
      rl.question("", processLine); // Request next line
    }
  }

  rl.question("", processLine); // Request the first line
}

function main() {
  const n = 5;
  const numLines = parseInt(n, 10);
  if (isNaN(numLines) || numLines <= 0) {
    console.error("Invalid input. Please enter a positive integer.");
    rl.close();
    return;
  }
  getLines(numLines);
}

main();
