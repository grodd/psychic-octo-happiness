const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const inp = parseInt(line);
  let pN2 = 0;
  let pN1 = 1;
  let sum = 0;
  for (let i = 0; i < inp; i++) {
    const pN = pN1 + pN2;
    sum += pN1;
    pN2 = pN1;
    pN1 = pN;
  }
  console.log(sum);
  rl.close();
});
