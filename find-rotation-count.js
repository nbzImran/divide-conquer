function findRotationCount(arr) {
  let low = 0;
  let high = arr.length -1;

  while (low <= high) {
    // if the arr is already sorted, then rotation is low 
    if (arr[low] <= arr[high]) {
        return low; 
    }

    let mid = Math.floor(( low + high) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid + arr.length - 1) % arr.length;

    //check if the mid is the minimum element
    if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
    }

    //decide whether to go to the left half or right half
    if (arr[mid] >= arr[low]) {
        low = mid + 1;
    } else {
        // right half is sorted, so the pivot musth be on the left
        high = mid - 1;
    }
  }
  return -1;
}

module.exports = findRotationCount