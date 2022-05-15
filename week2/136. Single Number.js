/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0
    
    for (n of nums) ans ^= n
    
    return ans
};