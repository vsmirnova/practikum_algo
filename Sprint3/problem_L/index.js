function find(arr, x, left, right) {
  if (right <= left) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);

  if (mid === 0 || (arr[mid] >= x && arr[mid - 1] < x)) {
    return mid + 1;
  } else if (arr[mid] >= x) {
    return find(arr, x, left, mid);
  } else {
    return find(arr, x, mid + 1, right);
  }
}

function solve() {
  const n = Number(_inputLines[0]);
  let arr = _inputLines[1]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  let x = Number(_inputLines[2]);

  const first = find(arr, x, 0, n);
  const second =
    first > 0 && arr[n - 1] >= x * 2 ? find(arr, x * 2, first - 1, n) : -1;
  process.stdout.write(`${first} ${second}`);
}
