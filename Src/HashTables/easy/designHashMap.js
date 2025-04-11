/*
https://leetcode.com/problems/design-hashmap/
*/
class Node {
    constructor(key, val, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

var MyHashMap = function() {
    this.size = 1000;
    this.buckets = Array.from({length: this.size}, () => null);
};

MyHashMap.prototype._hash = function(key) {
    return key % this.size;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const index = this._hash(key);

    if(this.buckets[index] === null) {
        this.buckets[index] = new Node(key, value);
    } else {
        let current = this.buckets[index];
        while(true) {
            if(current.key === key) {
                current.val = value;
                return;
            }
            if(current.next === null) break;
            current = current.next;
        }
        current.next = new Node(key, value);
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = this._hash(key);
    let current = this.buckets[index];

    while(current) {
        if(current.key == key) return current.val;
        current = current.next;
    }

    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    let prev = null;

    while(current) {
        if(current.key === key) {
            if(prev) {
                prev.next = current.next;
            } else {
                this.buckets[index] = current.next;
            }
        }
        prev = current;
        current = current.next;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

