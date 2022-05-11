/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    let map = new Map()
    let head = 0
    let tail = 0
    let longest = 0
    
    if (len === 0) return 0
    if (len === 1) return 1
    
    for (tail=0; tail < len; tail++) {
        //console.log('head/tail', head, tail)
        
        let pos = map.get(s[tail])
        
        if (pos >= head) {
            if ((tail - head) > longest) longest = tail - head;
            //console.log('sub/longest', tail-head, longest)
            map.set(s[tail], tail)
            head = pos + 1
            
        }else  {
            map.set(s[tail], tail)
            //console.log('map', map)
        }
    }
    
    if ((tail - head) > longest) longest = tail - head;
    
    return longest
};