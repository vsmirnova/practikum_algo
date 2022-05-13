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

function factorization(n) {
  let num = 2;
  let result = [];

  while (num * num <= n) {
    if (n % num === 0) {
      result.push(num);
      n = n / num;
    } else {
      num++;
    }
  }

  if (n > 1) {
    result.push(n);
  }

  return result;
}

function solve() {
  const n = Number(_inputLines[0]);

  process.stdout.write(`${factorization(n).join(" ")}`);
}
