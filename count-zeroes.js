function countZeroes() {
  let firstZero = findFirst(arr);
  if (firstZero == -1) return 0;

  return arr.length - firstZero;
}

function findFirst(arr, low=0, high = arr.length - 1) {
    // this function find the first 0 occure in the array
    if (high >= low) {
        // if the condition above is true then mid calculate the middle index
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            //check if the mid is first occurance of 0 or if mid is 0
            return mid;
        }else if (arr[mid] === 1) {
            // if first 0 occured in the right side of sub-arr
            return findFirst(arr, mid + 1, high);
        }
        //if the mid is not 1 yet and we have not returned the mid
        return findFirst(arr, low, mid - 1);
    }
    // if the there are not 0s
    return -1;
}

module.exports = countZeroes