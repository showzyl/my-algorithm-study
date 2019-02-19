/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/28/
 */

const moveZeroes = function (nums) {
  // console.log(`in nums: `, nums)
  let aTmp = []
  for (let i = 0; i < nums.length; i++) {
    // console.log(`item: `, nums[i])
    if (nums[i] === 0) {
      aTmp.push(i)
      nums.splice(i, 1)
      i--
    }
  }
  // console.log(`aTmp: `, aTmp)
  // console.log(`nums: `, nums)
  for (let i = 0; i < aTmp.length; i++) {
    nums.push(0)
  }
  console.log(`nums: `, nums)
  return nums
};

// const nums = [0,1,0,3,12]
const nums = [0, 0, 1]
// [1,3,12,0,0]
console.log(`moveZeroes: `, moveZeroes(nums))
