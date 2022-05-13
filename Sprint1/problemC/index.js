const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
  const n = Number(_inputLines[0]);
  const m = Number(_inputLines[1]);
  const x = Number(_inputLines[n + 2]);
  const y = Number(_inputLines[n + 3]);

  const cur_str = _inputLines[x + 2]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));

  let result = [];

  if (x - 1 >= 0) {
    const str = _inputLines[x + 1]
      .trim(" ")
      .split(" ")
      .map((num) => Number(num));
    result.push(str[y]);
  }

  if (y - 1 >= 0) {
    result.push(cur_str[y - 1]);
  }

  if (x + 1 < n) {
    const str = _inputLines[x + 3]
      .trim(" ")
      .split(" ")
      .map((num) => Number(num));
    result.push(str[y]);
  }

  if (y + 1 < m) {
    result.push(cur_str[y + 1]);
  }

  process.stdout.write(`${result.sort((a, b) => a - b).join(" ")}`);
}
