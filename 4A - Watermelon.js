const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const inp = parseInt(line);
  const mod = inp % 2;

  if (inp > 2 && mod === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  rl.close();
});
