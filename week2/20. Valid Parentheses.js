/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    let pair = new Map([
        ['(', ')'],
        ['{', '}'], 
        ['[', ']'],
    ]);
    
    
    for (let c of s) {
        if (pair.has(c)) {
            stack.push(c)
        }else if (pair.get(stack.pop()) !== c) {
            return false
        }
    }
    
    return stack.length === 0;
};