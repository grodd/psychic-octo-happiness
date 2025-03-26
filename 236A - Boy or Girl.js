const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  let Obj = {};
  for (let i = 0; i < line.length; i++) {
    Obj[line[i]] = 1;
  }
  rl.close();

  const uniqueChars = Object.keys(Obj);
  if (uniqueChars.length % 2 === 0) {
    console.log("CHAT WITH HER!");
  } else {
    console.log("IGNORE HIM!");
  }
});
