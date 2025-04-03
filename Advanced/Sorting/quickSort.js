
/*
time complexity: O(NlogN)
*/

function partition(a, low, high) {
    const pivot = a[high];

    let i = low-1;
    for(let j=low; j<=high; j++) {
        if(a[j] < pivot) {
            i++;
            swap(a, i, j);
        }
    }

    swap(a, i+1, high);

    return i+1;
}

function swap(a, i , j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function quickSort(arr, low, high) {
    if(low < high) {
        const pi = partition(arr, low, high);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi + 1, high);
    }
}

function main() {
    let arr = [ 10, 7, 8, 9, 1, 5, 33, 2, 22, 4, 55 ];
    let n = arr.length;

    // Call QuickSort on the entire array
    quickSort(arr, 0, n - 1);
    console.log(arr);
}

main();