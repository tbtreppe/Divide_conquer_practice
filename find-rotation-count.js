function findRotationCount(arr, low = 0, high = arr.length - 1) {
  if (high >= low) return 0;
  if (high === low) return low;
  let mid = Math.floor((high + low) / 2);

  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  if (mid > low && arr[mid] > arr[mid - 1]) return mid;

  if (arr[high] > arr[mid]) return findRotationCount(arr, low, mid - 1);
  return findRotationCount(arr, high, mid + 1);
}

module.exports = findRotationCount;
