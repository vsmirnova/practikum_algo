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
  const arr = _inputLines[1]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));

  let result = 0;

  if (n < 2) {
    result = 1;
  } else {
    for (let i = 0; i < n; i++) {
      if (
        (i === 0 && arr[i] > arr[i + 1]) ||
        (i === n - 1 && arr[i] > arr[i - 1]) ||
        (i !== 0 && i !== n - 1 && arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
      ) {
        result++;
      }
    }
  }

  process.stdout.write(`${result}`);
}
