/**
 * @param {number[]} nums
 * @return {number[][]}
*/

var threeSum = function(nums) {
    const len = nums.length
    let res = []
    
    nums.sort((a, b) => a - b);
    
    for (let i=0; i<len-2; i++) {
        if (nums[i] > 0) break;
        if (i>0 && nums[i] === nums[i-1]) continue
        
        let remain = 0 - nums[i]
        let head = i + 1
        let tail = len - 1
        
        while (head < tail) {
            let sum = nums[head] + nums[tail]
            
            if (sum < remain) {
                head += 1
            }else if (sum > remain) {
                tail -= 1
            }else {
                res.push([nums[i], nums[head], nums[tail]])
                while (head < tail && nums[head] === nums[head+1]) head += 1;
                while (head < tail && nums[tail] === nums[tail-1]) tail -= 1;
                head += 1
                tail -= 1
            }
        }
    }
    
    return res
};