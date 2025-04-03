//[1,2,3,4]

// let globalArry = []
// function getAllSubArrays(arr, start, end) {
//     console.log(arr.length, start, end)
//     if(end === arr.length) {
//         return
//     } else if(start > end) {
//         getAllSubArrays(arr, 0, end+1)
//     } else {
//         if(start <= end) {
//             let temp = [];

//             for(let i=start; i<=end; i++) {
//                 temp.push(arr[i]);
//             }

//             globalArry.push(temp)
//         }

//         getAllSubArrays(arr, start+1, end)
//     }
// }
// getAllSubArrays([1,2,3,4], 0, 0)
// console.log(globalArry)


function printSubArrays(arr, start, end)
{
     
    // Stop if we have reached the end
    // of the array    
    if (end == arr.length)
        return;
       
    // Increment the end point and start
    // from 0
    else if (start > end)
        printSubArrays(arr, 0, end + 1);
           
    // Print the subarray and increment
    // the starting point
    else
    {
        let temp = []
        for(var i = start; i <= end; i++)
        {
            temp.push(arr[i])
        }
         
        console.log(temp);
        printSubArrays(arr, start + 1, end);
    }
    return;
}
 
// Driver code
var arr = [ 1, 2, 3 ];
printSubArrays(arr, 0, 0);