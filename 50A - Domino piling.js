const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (input) => {
  const [m, n] = input.split(" ").map((inp) => parseInt(inp, 10));
  rl.close();
  const numOfDominos = Math.floor((m * n) / 2);
  console.log(numOfDominos);
});
