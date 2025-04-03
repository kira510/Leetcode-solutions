/*
Suppose there is a circle. There are n petrol pumps on that circle. You are given two sets of data.
The amount of petrol that every petrol pump has.
Distance from that petrol pump to the next petrol pump.
Calculate the first point from where a truck will be able to complete the circle (The truck will stop 
    at each petrol pump and it has infinite capacity). Expected time complexity is O(n). 
    Assume for 1-litre petrol, the truck can go 1 unit of distance.


For example, 
let there be 4 petrol pumps with amount of petrol and distance to 
next petrol pump value pairs as {4, 6}, {6, 5}, {7, 3} and {4, 5}. The first point from where 
the truck can make a circular tour is 2nd petrol pump. 
Output should be “start = 1” (index of 2nd petrol pump).
*/

//                 4,6 
                 
//   (9)  4,5               6,5 -> SP

//                 7,3 (8)

//             [4,6,7,4] petrol , petrolPumpPos = startPoint

//             [6,5,3,5] distance

//             [-2,1,4,-1] , 0 or >0 

/*
// Given a sorted array,we need to find a pair whose sum is closed to number X in Array.
// For example:
// 1
// 2
// 3
// 4
 
// array[]={-40,-5,1,3,6,7,8,20};
// The pair whose sum is closest to 5 :  1 and 3
*/

function closestSum(arr, target) {
    let min = Infinity, item1, item2;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            let sum = arr[i] + arr[j];

            if(Math.abs(target - sum) < min ) {
                item1 = arr[i];
                item2 = arr[j];
                min = Math.abs(target - sum)
            }
        }
    }

    return [item1, item2];
}

console.log(closestSum([-40,-5,1,3,6,7,8,20], 3))
