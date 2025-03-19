const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const inpArr = line.split(" ").map((num) => parseInt(num));
  rl.close();
  const horizontalTilesCount = Math.ceil(inpArr[0] / inpArr[2]);
  const verticalTilesCount = Math.ceil(inpArr[1] / inpArr[2]);

  // complete output formula would be totalArea of the rectangle horizontalTilesCount x verticalTilesCount
  // and divided by area of the square tile
  const output = horizontalTilesCount * verticalTilesCount;
  console.log(output);
});
