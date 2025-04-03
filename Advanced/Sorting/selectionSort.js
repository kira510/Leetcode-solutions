function selectionSort(a) {
    const len = a.length - 1;
    for(let i=0; i<len-1; i++) {
        let smallest = i;

        for(let j=i+1; j<len; j++) {
            if(a[j] < a[smallest]) {
                smallest = j;
            }
        }
        const temp = a[i];
        a[i] = a[smallest];
        a[smallest] = temp;
    }

    return a;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));