function findNextLargestNo(nums, k) {
    let left = 0, right = nums.length;

    while(left < right) {
        let middle = Math.floor((left+right)/2);

        if(nums[middle] > k) right = middle;
        else left = middle+1;
    }

    return left
}

console.log(findNextLargestNo([0,3,5,6,8,9], 9));

/*
Why i included this?

To seach next largest no, the right indice we select is not num.length-1, instead it nums.length

*/