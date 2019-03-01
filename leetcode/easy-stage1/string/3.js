/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/
 */


// const firstUniqChar = function (s) {
//
// };
//
//
//
// let s = "leetcode"
// // 返回 0.
//
// // let s = "loveleetcode",
//   // 返回 2.
// console.log(`firstUniqChar: `, firstUniqChar(s))

function search(A, target) {
  let n = A.length;
  if (n === 0) return -1;
  let left = 0, right = n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (A[mid] === target) {
      return mid;
    } else if (A[mid] < A[right]) {
      if (A[mid] < target && A[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (A[left] <= target && A[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

let nums = [1, 3], target = 1
console.log(`search: `, search(nums, target))


