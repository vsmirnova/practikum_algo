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

function binarySum(n1, n2) {
  let maxNum;
  let minNum;
  let result = "";
  let range = 0;

  if (n1.length > n2.length) {
    maxNum = n1;
    minNum = n2;
  } else {
    maxNum = n2;
    minNum = n1;
  }

  for (let i = 0; i < maxNum.length; i++) {
    const curNum =
      Number(maxNum[maxNum.length - 1 - i]) +
      Number(minNum[minNum.length - 1 - i] || 0) +
      range;
    if (curNum > 1) {
      range = 1;
      result = (curNum % 2) + result;
    } else {
      range = 0;
      result = curNum + result;
    }
  }

  return range ? range + result : result;
}

function solve() {
  const n1 = _inputLines[0];
  const n2 = _inputLines[1];
  process.stdout.write(`${binarySum(n1, n2)}`);
}
