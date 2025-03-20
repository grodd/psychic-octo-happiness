const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let lines = [];
let count = 0;

rl.on("line", (input) => {
  lines.push(input);
  count++;

  if (count === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const k = lines[0].split(" ")[1] - 1;
  const scores = lines[1].split(" ").map((score) => parseInt(score, 10));
  const minScore = scores[k];

  let qualifiedCount = 0;
  scores.forEach((score) => {
    if (score > 0 && score >= minScore) {
      qualifiedCount++;
    }
  });

  console.log(qualifiedCount);
});
