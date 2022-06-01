/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let leftCount = 0
    let rightCount = 0
    let record = []
    let result = []
    
    function DFS (parentheses, n) {
        record.push(parentheses)
        //console.log('record: ', record)
        //console.log('left/right: ', leftCount, rightCount)
        
        if (rightCount > leftCount) return
        if (leftCount > n) return
        if (rightCount === n) {
            result.push(record.join(''))
            
            //console.log('found!', record.join(''))
            //console.log('==============')
            return
        }
        
        leftCount += 1
        DFS ('(', n)
        leftCount -= 1
        record.pop()
        
        rightCount += 1
        DFS (')', n)
        rightCount -= 1
        record.pop()
    }
    
    leftCount = 1
    DFS('(', n)
    
    return result
};