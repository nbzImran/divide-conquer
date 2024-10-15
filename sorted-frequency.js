function sortedFrequency() {
    // helper function to find the first occurance of the num
    function findFirst(arr, num, low, high) {
        while (high >= low) {
            let mid = Math.floor((low + high) / 2);
            if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
                return mid;
            } else if (arr[mid] < num) {
                low = mid + 1;
            }else {
                high = mid - 1;
            }
        }
    return -1;
    }

    //helpre function to fidn the last occurence of num
    function findLast(arr, num, low, high) {
        while (high >= low) {
            let mid = Math.floor((low + high) / 2);
            if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
                return mid;
            }else if (arr[mid] > num) {
                high = mid - 1;
            }else {
                low = mid + 1;
            }
        }
        return -1;
    }


    let first = findFirst(arr,num, 0, arr.length - 1);
    if (first === -1) {
        return 0; // num is not present in the arr
    }

    let last = findLast(arr, num, 0, arr.length - 1);
    return last - first + 1;
}

module.exports = sortedFrequency