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
  var splitted = _inputLines[0]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  const a = splitted[0];
  const b = splitted[1];
  const c = splitted[2];

  let result;
  const isEven = !(a % 2);

  if (!(b % 2) === isEven && !(c % 2) === isEven) {
    result = "WIN";
  } else {
    result = "FAIL";
  }

  process.stdout.write(`${result}`);
}
