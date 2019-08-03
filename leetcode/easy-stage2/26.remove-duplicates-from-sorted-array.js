/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if(nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }
  console.log(`slow: `, slow)
  return slow + 1
}

// let nums = [1,1,2]
let nums = [1,2,2,3]
// let nums = [0,0,1,1,1,2,2,3,3,4]

console.log(`re: `, removeDuplicates(nums))



