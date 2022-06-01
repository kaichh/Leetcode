/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxGap = 0
    
    for (let i=1; i<prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        else if (prices[i] - minPrice > maxGap){
            maxGap = prices[i] - minPrice
        }
    }
    
    return maxGap
};