const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const numbersBucket = { 1: 0, 2: 0, 3: 0 };
  const inpSum = line.split("+");
  for (let i = 0; i < inpSum.length; i++) {
    numbersBucket[inpSum[i]] += 1;
  }
  rl.close();
  let outputSum = "";
  let lastIndex = 0;
  for (let i = 0; i < numbersBucket[1]; i++) {
    outputSum += `1+`;
    lastIndex += 2;
  }

  for (let i = 0; i < numbersBucket[2]; i++) {
    outputSum += `2+`;
    lastIndex += 2;
  }

  for (let i = 0; i < numbersBucket[3]; i++) {
    outputSum += `3+`;
    lastIndex += 2;
  }

  console.log(outputSum.slice(0, lastIndex - 1));
});
