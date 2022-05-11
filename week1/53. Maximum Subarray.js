/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let rollingSum = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + rollingSum < nums[i]) {
            rollingSum = nums[i];
        } else {
            rollingSum += nums[i];
        }
        
        max = Math.max(max, rollingSum);
    }
    
    return max;
};