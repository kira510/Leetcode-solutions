/*
Problem solving

Given a string, decode it. 
Validation, the alphabetical part will be enclosed in “[ ]”, and will not contain any spaces.
For example
Input  3[a] 
Output aaa

Input 3[a]2[b]
Output aaabb

Input 3[ac]2[b]
Output acacacbb

Input 3[a2[c]]

Input 3[a2[b]1[c]]


Input 3[a2[cd]]2[b] --> this one
*/

var decodeString = function(s) {
    var stack = [];
    var i=0;
    var j=0;
    for(; i<s.length; i++) {
        var buf = [];
        var seq;
        var freq = 0;
        var c = s.charAt(i);
        if (c===']') {
            for(j = stack.length-1; j>=0; j--) {
                var p = stack.pop();
                if (p === '[') {
                    seq = buf.join('');
                    buf = [];
                    for(var k=j-1; k>=0 && stack[k]>='0' && stack[k]<='9'; k--) {
                        buf.unshift(stack.pop());
                    }
                    freq=parseInt(buf.join(''));
                    stack.push(Array(freq+1).join(seq));
                    buf = [];
                    break;
                }
                else {
                    buf.unshift(p);
                }
            }
        }
        else {
            stack.push(c);
        }
    }
    return stack.join('');
};

//console.log(decodeString('3[a2[cd]]2[b]'))

//3[a21[cd]]2[b]
var decodeString2 = function(s) {
    var stack = [];
    let i=0, j=0;

    for(; i<s.length; i++) {
        let buf = [];
        let freq = 0;
        let seq = '';
        if(s[i] === ']') {
            for(j=stack.length-1; j>=0; j--) {
                let p = stack.pop();
                if(p === '[') {
                    seq = buf.join('')
                    buf = []
                    for(let k=j-1; k>=0 && stack[k] >=0 && stack[k]<=9; k--) {
                        buf.unshift(stack.pop())
                    }
                    freq = parseInt(buf.join(''))
                    let concatString = Array(freq+1).join(seq);
                    stack.push(concatString)
                    break
                } else {
                    buf.unshift(p)
                }   
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('');
};

console.log(decodeString2('3[a2[cd]]2[b]'))
