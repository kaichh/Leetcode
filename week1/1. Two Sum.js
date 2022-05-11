/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let remain = 0
    let solution = []
    const set = new Set()
    
    for (let i=0; i<len; i++) {
        remain = target - nums[i]
        
        if (set.has(remain)) {
            solution.push(i)
            break
        }
        set.add(nums[i])
    }
    
    for (let i=0; i<len; i++) {
        if (nums[i] === remain) return [i, ...solution]
    }
};