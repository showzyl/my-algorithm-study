/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
 */


const maxProfit = function (prices) {
  let res = 0
  return prices.reduce((acc, item, i, arr) => {
    if (arr[i + 1] > item) {
      acc = acc + arr[i + 1] - item
    }
    return acc
  }, res)
};

console.log(`re: `, maxProfit([7, 1, 5, 3, 6, 4]))
console.log(`re: `, maxProfit([1,2,3,4,5]))
console.log(`re: `, maxProfit([7, 6, 4, 3, 1]))
