/*
in sorted array, return first pair that returns zero

[-3,-2,0,1,2,4, 5] => Ans: [2, -2]
*/

function sumZero(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left<right) {
        let sum = nums[left] + nums[right];

        if(sum > 0) {
            right--;
        } else if(sum < 0) {
            left++;
        } else {
            return [nums[left] , nums[right]]
        }
    }

    return [];
}

console.log(sumZero([-3,-2,0,1,2,4, 5]));
