/*
23 1 10 5 2

1 23 10 5 2
1 10 23 5 2
1 5 10 23 2
1 2 5 10 23 

time vomplexity: O(n^2)
*/
function insertionSort(a) {
    for(let i = 1; i<a.length; i++) {
        for(let j=i; j>0; j--) {
            if(a[j] < a[j-1]) {
                const temp = a[j];
                a[j] = a[j-1];
                a[j-1] = temp;
            }
        }
    }

    return a;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));