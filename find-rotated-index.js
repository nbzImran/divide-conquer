function findRotatedIndex(arr, num) {
 let low = 0;
 let high = arr.length -1;

 while ( high >= low ) {
    let mid = Math.floor((low + high) / 2);

    //check if mid is the target
    if (arr[mid] == num) {
        return mid;
    }

    //determine which half is soorted 
    if (arr[low] <= arr[mid]) {
        //left half is sordted 
        if (num >= arr[low] && num < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } else {
        //right half is sorted
        if (num > arr[mid] && num <= arr[high]) {
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
 }
 return -1;
}

module.exports = findRotatedIndex