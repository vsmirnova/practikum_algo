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

function binary(param) {
  let num = param;
  let result = "";
  while (num > 1) {
    result = (num % 2) + result;

    num = parseInt((num / 2).toString());
  }

  return num + result;
}

function solve() {
  const n = Number(_inputLines[0]);

  process.stdout.write(`${binary(n)}`);
}
