/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = new Map([
        [1, 1],
        [2, 2]
    ]);
    
    for (let i=3; i<=n; i++) {
        steps.set(i, steps.get(i-1) + steps.get(i-2))
    }
    
    return steps.get(n)
};