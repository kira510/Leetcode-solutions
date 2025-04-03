function merge(a1, a2) {
    const res = [];

    let i=0, j=0;
    //i or j will start from 0 and it will increase to a1.length/a2.length when all its iteration is over 
    while(i <= a1.length - 1 && j <= a2.length - 1) {
        if(a1[i] < a2[j]) {
            res.push(a1[i]);
            i++
        } else {
            res.push(a2[j]);
            j++
        }
    }

    //if a1 = [1,2,3], if i is 2 then 3 needs to be added as it was incremented and not pushed yet
    if(i == (a1.length) && j <= (a2.length - 1)) {
        res.push(...a2.slice(j));
    } else if(i <= (a1.length - 1) && j == (a2.length)) {
        res.push(...a1.slice(i));
    }

    return res;
}

function mergeSort(arr) {
    if(arr.length == 1) return arr;

    const len = arr.length;
    const mid = Math.floor(len/2);

    const a1 = mergeSort(arr.slice(0, mid));
    const a2 = mergeSort(arr.slice(mid));

    return merge(a1, a2);
}

console.log(mergeSort([12, 11 ,33, 13, 5, 6, 7]));
console.log(mergeSort([12, 11, 13, 5, 6, 2, 7, 9]));