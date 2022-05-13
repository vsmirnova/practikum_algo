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
  const arr = _inputLines[1].trim(" ").split(" ");

  let word = arr[0];
  let wordLen = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length;
    if (len > wordLen) {
      word = arr[i];
      wordLen = len;
    }
  }

  process.stdout.write(`${word}\n${wordLen}`);
}
