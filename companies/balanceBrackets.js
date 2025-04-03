let bracketMap = {
    "{": "}",
    "(": ")",
    "[": "]"
}

function balanceBrackets(str) {
    let stack = [], brackets = Object.values(bracketMap);

    for(let i=0; i<str.length; i++) {
        if(brackets.includes(str[i])) {
            let p = stack.pop();

            if(bracketMap[p] !== str[i]) return false 

        } else {
            stack.push(str[i]);
        }

    }

    if(!stack.length) {
        return true
    }

    return false
}

console.log(balanceBrackets('{([])}()}'))
