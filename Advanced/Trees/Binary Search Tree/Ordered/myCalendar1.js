
var MyCalendar = function() {
    this.val = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let left=0, right=this.val.length - 1;

    while(left<=right) {
        let mid = Math.floor((left+right)/2);

        const [s,e] = this.val[mid];

        if(e>start && s<end) return false;

        if(start>=e) left = mid+1 
        else right = mid-1 
    }
    this.val.splice(left,0,[start, end]);

    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 * 
 * The time complexity is O(log n) due to the binary search for a suitable position, followed by O(n) for the insertion operation.
Space Complexity:
O(n), where n is the number of bookings, as each booking is stored.
 */

const cal = new MyCalendar();

console.log(cal.book(37,50));
console.log(cal.book(33,50));
console.log(cal.book(4,17));
console.log(cal.book(35,48));