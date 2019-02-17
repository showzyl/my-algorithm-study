/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/
 */

// 效率不是很高，待优化
const intersect = function(nums1, nums2) {
  let map = new Map()
  let aRes = []
  for (let i = 0; i < nums1.length; i++) {
    let value = map.get(nums1[i])
    map.set(nums1[i], (value == null ? 0 : value) + 1)
  }
  console.log(`map: `, map)
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) !== 0) {
      aRes.push(nums2[i])
      map.set(nums2[i], map.get(nums2[i]) - 1)
    }
  }
  console.log(`aRes: `, aRes)
  return aRes
};

// let nums1 = [1,2,2,1], nums2 = [2,2];
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(`res: `, intersect(nums1, nums2))
