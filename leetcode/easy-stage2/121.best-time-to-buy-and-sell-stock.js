/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md
 *
 */


// let prices = [7,1,5,3,6,4]
let prices = [7,6,4,3,1]

function maxProfit(prices) {
  let profit = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if(prices[i] < min) min = prices[i]
    if(prices[i] - min > profit) {
      profit = prices[i] - min
    }
  }
  console.log(`min: `, min)
  console.log(`profit: `, profit)
  return profit
}

console.log(`re: `, maxProfit(prices))












