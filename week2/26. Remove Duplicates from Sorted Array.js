/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length
    let k = 1
    
    for (let i=1; i<len; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k += 1
        }
    }
    
    return k
};