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

function fourDegree(n) {
  let num = n;

  while (num >= 4) {
    num = num / 4;
  }

  return num === 1 ? "True" : "False";
}

function solve() {
  const n = Number(_inputLines[0]);

  process.stdout.write(`${fourDegree(n)}`);
}
