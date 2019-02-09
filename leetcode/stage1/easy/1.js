/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
 */

const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


