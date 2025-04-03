let k = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22, 15,-4,7]

let m = [0,5,0,1,-9,2,0,5]

let n = ['1','3','-2','1','2']


function longSteak(arr) {
    let maxSum = arr[0], summer = 0, notsupported = false;
    let largeAmt = 0;
    
    for (let i=0; i<arr.length; i++) {
        if(isNaN(+arr[i])) { 
            notsupported = true;
            break;
        }
        
        //console.log('-------', summer)
        largeAmt = Math.max(maxSum, largeAmt);
        summer = summer +  (+arr[i]);
        if(summer * -1 > maxSum) {
            maxSum = 0;
            summer = 0;
        } else if(summer > 0) {
            maxSum = summer; 
        }

        //console.log('----maxsum--', maxSum)

        //summer = Math.max(summer, 0);
    }
    if (notsupported) {
        console.log(0)
    } else {
        console.log(Math.max(maxSum, largeAmt));
    }
}

longSteak(k)