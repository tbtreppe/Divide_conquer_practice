const findRotationCount = require("./find-rotation-count");

function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (high < low) return -1;

  if (num >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) return arr[mid];

  if (arr[mid] > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }
  if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  }
  return findFloor(arr, num, high, mid + 1);
}

module.exports = findFloor;
