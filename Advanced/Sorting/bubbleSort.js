//time complexity: O(n^2)

function bubbleSort(a) {
    for(let i=0; i<a.length-1; i++) {
        for(let j=0; j<a.length-i-1; j++) {
            if(a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;            
            }
        }
        console.log(`${i} : ${a}`);
    }

    return a;
}

//console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
bubbleSort([64, 34, 25, 12, 22, 11, 90])