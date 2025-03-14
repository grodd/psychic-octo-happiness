const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const sum = line.split(" ").reduce((prev, curr) => prev + parseInt(curr), 0);
  console.log(sum);
  rl.close();
});

