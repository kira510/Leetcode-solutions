
/*
const arr = [4,5,200,400,2,3,1]

MaxSeq is: 12345
*/

function findMaxSeq(arr) {
    const tempObj = {};

    for(let i=0; i<arr.length; i++) {
        tempObj[arr[i]] = true;
    }

    let maxCount = 0;

    for(let i=0; i<arr.length; i++) {
        let count = 1;
        let num = arr[i];
        while(tempObj[++num]) {
            count++
        }
        
        maxCount = Math.max(count, maxCount)
    }

    console.log(maxCount);
}

findMaxSeq([4,5,200,400,3,6,7])
