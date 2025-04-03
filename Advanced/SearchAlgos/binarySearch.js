//Array must be sorted
function binarySearch(arr, val) {
    let mid;
    let low = 0; high = arr.length - 1;

    while(high >= low) {
        mid = low + Math.floor((high-low)/2);

        if(arr[mid] == val) return mid;

        if(val > arr[mid]) low = mid + 1;
        else high = mid - 1
    }

    return -1;
}

function binarySearchRecursive(array, val) {
    function recursive(low, high) {
        if(!(high >= low)) return -1;

        let mid = low + Math.floor((high - low)/ 2);

        if(val == array[mid]) return mid;
        
        if(val < array[mid]) high = mid - 1;
        else low = mid + 1;

        return recursive(low, high);
    }

    return recursive(0, array.length - 1);
}

console.log(binarySearch([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 678));
console.log(binarySearch([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 57));
console.log(binarySearch([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 690));
console.log('------------');
console.log(binarySearchRecursive([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 678));
console.log(binarySearchRecursive([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 57));
console.log(binarySearchRecursive([12, 34, 56, 78, 90, 100, 123, 234, 345, 456, 567, 678], 690));