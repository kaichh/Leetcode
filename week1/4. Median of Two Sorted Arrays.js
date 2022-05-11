/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Let X be the shorter array, Y be the longer array
    let X = []
    let Y = []
    
    if(nums1.length <= nums2.length) {
        X = nums1
        Y = nums2
    }else {
        X = nums2
        Y = nums1
    }
    
    
    const l1 = X.length
    const l2 = Y.length
    const len = l1 + l2
    let start = 0
    let end = l1
    let posX, posY  //posX means how many items on the left part of X
    let maxLX, minRX, maxLY, minRY
    
    
    while (true) {
        // Partition both X and Y arrays so that (LeftX + LeftY) elements = Ceil((X + Y) / 2)
        posX = Math.ceil((start + end) / 2)
        posY = Math.ceil(len / 2) - posX
        //console.log('p1/p2: ', pos1, pos2)
        
        maxLX = (posX === 0) ? -Infinity : X[posX - 1]
        minRX = (posX === l1) ? Infinity : X[posX]
        maxLY = (posY === 0) ? -Infinity : Y[posY - 1]
        minRY = (posY === l2) ? Infinity : Y[posY]
        
        //console.log('maxLX/minRX/maxLY/minRY ', maxLX, minRX, maxLY, minRY)
        if (maxLX <= minRY && maxLY <= minRX) {
            break
        }
        
        if (maxLX > minRY) {
            end = posX - 1
            
        }else {
            start = posX
        } 
        //console.log('start/end: ', start, end)
    }
    
    //console.log('FINAL maxLX/minRX/maxLY/minRY ', maxLX, minRX, maxLY, minRY)
    
    
    if (len % 2) {
        return Math.max(maxLX, maxLY)
    }else {
        return (Math.max(maxLX, maxLY) + Math.min(minRX, minRY)) / 2
    }
    
    
};