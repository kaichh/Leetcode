/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let v = 0
    let maxV = 0
    
    // Start from the widest lines.
    // Since they are the widest, the inner line we find next should be taller to compensate the less width.
    // Therefore, we should always abandon the shorter wall and move to the inner line, and check if the volume is greater than maximum.
    
    
    while (left < right) {
        if (height[left] <= height[right]) {
            v = height[left] * (right - left)
            //console.log('l/r/v/maxV: ', left, right, v, maxV)
            maxV = Math.max(v, maxV) 
            left += 1
            
            /* Don't know why this cause 'Time Limit Exceeded' error
            while (height[left + 1] <= height[left] && left < right) left += 1;
            */
        }else {
            v = height[right] * (right - left)
            //console.log('l/r/v/maxV: ', left, right, v, maxV)
            maxV = Math.max(v, maxV)
            right -= 1
            
            /* Don't know why this cause 'Time Limit Exceeded' error
            while (height[right - 1] <= height[right] && left < right) right -= 1;
            */
        }
    }

    return maxV       
};
