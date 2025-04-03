/**
 * https://leetcode.com/problems/top-k-frequent-words/
 * 
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * 
 * max heap solution
 * 
 * Time Complexity:
 * Sorting time for heap = O(klogk)
 * Number of times sorting done = n
 * 
 * Total time: O(nlogk)
 */
var topKFrequent = function(words, k) {
    const freqMap = {};
    const maxHeap = [];

    function compare(a, b) {
        return freqMap[a] === freqMap[b] ?
            a.localeCompare(b) :
            freqMap[b] - freqMap[a]
    }

    function insertToHeap(word) {
        maxHeap.push(word);
        maxHeap.sort(compare);
        if(maxHeap.length > k) maxHeap.pop();
    }

    for(const word of words) {
        freqMap[word] = (freqMap[word] || 0) + 1
    }

    Object.keys(freqMap).forEach(word => {
        insertToHeap(word);
    });

    return maxHeap;
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2));
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));