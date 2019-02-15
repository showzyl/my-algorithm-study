/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/24/
 */


const containsDuplicate = function (nums) {
  let o = {}
  let aRes = []
  ;o = nums.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++
      aRes.push(item)
    } else {
      acc[item] = 1
    }
    return acc
  }, o)
  return !!aRes.length
};

// containsDuplicate([1,2,3,1])
// containsDuplicate([1,2,3,4])
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
