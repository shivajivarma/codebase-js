function binarySearch(arr, num) {
  let low = 0;
  let high = arr.length;
  let pos = -1;

  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (num === arr[mid]) {
      pos = mid;
      break;
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return pos;
}

module.exports = binarySearch;
