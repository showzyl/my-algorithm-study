/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/
 */


const singleNumber = function(nums) {
  return nums.reduce((prev, cur) => prev ^ cur)
};

console.log(`res: `, singleNumber([2,2,1]))
console.log(`res: `, singleNumber([4,1,2,1,2]))

