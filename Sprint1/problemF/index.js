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

function palindrome(str) {
  let newStr = "";
  let newStrReverse = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/g.test(str[i])) {
      newStr += str[i].toLowerCase();
      newStrReverse = str[i].toLowerCase() + newStrReverse;
    }
  }

  return newStr === newStrReverse;
}

function solve() {
  const str = _inputLines[0];
  const result = palindrome(str);
  process.stdout.write(result ? "True" : "False");
}
