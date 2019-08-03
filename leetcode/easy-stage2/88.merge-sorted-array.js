/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md
 *
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let cur = nums1.length - 1
  console.log(`cur: `, cur)
  while (cur >= 0){
    // 后一个数组被清空了
    if (n === 0) return
    if(nums1[m - 1] <= nums2[n - 1]) {
      nums1[cur--] = nums2[--n]
    } else {
      nums1[cur--] = nums1[--m]
    }
  }

  console.log(`nums1: `, nums1)
  console.log(`nums2: `, nums2)
}


let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

console.log(`re: `, merge(nums1, m, nums2, n))



