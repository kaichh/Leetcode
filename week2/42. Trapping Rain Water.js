/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2) return 0
    
    const len = height.length
    let left = 1
    let right = len - 2
    let maxLeft = height[0]
    let maxRight = height[len - 1]
    let volume = 0
    
    
    while (left <= right) {
        if (maxLeft < maxRight) {
            if (height[left] > maxLeft) maxLeft = height[left];
            else volume += maxLeft - height[left];
            //console.log('ml/mr: ', maxLeft, maxRight)
            //console.log('l/r/v: ', left, right, volume)
            
            left += 1
            //console.log('move left to', left)
            //console.log('================')
        } else {
            if (height[right] > maxRight) maxRight = height[right];
            else volume += maxRight - height[right];
            //console.log('ml/mr: ', maxLeft, maxRight)
            //console.log('l/r/v: ', left, right, volume)
            
            right -= 1
            //console.log('move right to', right)
            //console.log('================')
        }
    }
    
    return volume
};