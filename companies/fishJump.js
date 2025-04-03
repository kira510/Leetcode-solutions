/*
Fish and bowls

Given a binary string, assume each binary character represents a bowl and the value of 1 implies it has one fish and the value of 0 implies no fish.

Example: "1011"
4 bowls where there is one fish each in the first, third and fourth bowls.

If a fish can jump only to the nearest bowl, construct a solution array for each position denoting how many minimal fish-jumps are needed to get all the fish to that position.
Note that a bowl initially will only have one fish, but during the jumping process, there can be more than one fish in a bowl.

Computation for each position should consider the initial state of the bowls.

Example:
Input: bowls = "110"
Output: [1,1,3]

Input: bowls : 0"1001"0
Output: [3, 3, 3, 3]

"110"

---------
i=1,

numberOfFish = 1
rightadder =1
[,1,]

-------------------
i=2

numberOfFish = 2
rightAdder = 1 + 2 = 3
[,1,3]

--------------------
i=1,
leftAdder = 0
output = [,1,3]

-------------------
i=0
leftdder = 1
output = [1,1,3]
*/

function fishJump(arr) {
    let rightAdder = 0;
    let numberOfFish = 0;
    let leftAdder = 0;
    let output = [];

    for(let i=1; i<arr.length; i++) {
        if(arr[i-1]) {
            numberOfFish+=1;
        }
        rightAdder += numberOfFish;
        output[i] = rightAdder;
    }

    numberOfFish = 0;

    for (let i=arr.length-2; i>=0; i--) {
        if(arr[i+1]) {
            numberOfFish+=1;
        }
        leftAdder += numberOfFish;

        if(!output[i]) {
            output[i] = 0;
        }

        output[i]+=leftAdder
    }

    console.log(output);
}

fishJump([1, 0, 0, 1]);