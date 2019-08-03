/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md
 *
 */


// let prices = [7,1,5,3,6,4] // 7
  // let prices = [1, 2, 3, 4, 5] // 4
let prices = [7,6,4,3,1] // 0

function maxProfit(prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += (prices[i] - prices[i - 1])
    }
  }
  console.log(`profit: `, profit)
  return profit
}

console.log(`re: `, maxProfit(prices))












