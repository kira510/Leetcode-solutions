/**
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1;
    let maxArea = 0;

    while(left < right) {
        const currentArea = Math.min(height[left], height[right])*(right-left);
        maxArea = Math.max(maxArea,currentArea);
        
        if(height[right] > height[left]) left++;
        else right--;
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));