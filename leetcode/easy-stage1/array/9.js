/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/29/
 */


const twoSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target &&
        res.indexOf(i) < 0 &&
        res.indexOf(j < 0)
      ) {
        res.push(i)
        res.push(j)
      }
    }
  }
  console.log(`res: `, res)
  return res
};


// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const nums = [3, 2, 4]
let target = 6
console.log(`twoSum: `, twoSum(nums, target))
