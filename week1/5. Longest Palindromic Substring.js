/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length
    let longest = s[0]
    let sub = ''
    
    // Check 3 char
    for (let i=0; i<len-2; i++) {
        if (s[i] === s[i+2]) {
            sub = countSubstring(i, i+2)
            if (sub.length > longest.length) longest = sub
        }
    }
    
    
    // Check 2 char
    for (let i=0; i<len-1; i++) {
        if (s[i] === s[i+1]) {
            sub = countSubstring(i, i+1)
            if (sub.length > longest.length) longest = sub
        }
    }
    
    function countSubstring (start, end) {
        while(s[start+1] && s[end+1]) {
            if (s[start-1] !== s[end+1]) break
            start -= 1
            end += 1
        }
        return s.substring(start, end + 1)
    }
    
    return longest
};