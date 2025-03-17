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
      lines.forEach((l, index) => {
        const strLen = l.length;
        if (strLen > 10) {
          const prefix = l[0];
          const postfix = l[strLen - 1];
          const remLen = l.slice(1, strLen - 1).length;
          const output = `${prefix}${remLen}${postfix}`;
          console.log(output);
        } else {
          console.log(l);
        }
      });
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
