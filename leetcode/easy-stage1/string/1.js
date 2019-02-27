/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/
 */

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    exchange(s, i, s.length - 1 - i)
  }
  console.log(`s: `, s)
  return s
};

const exchange = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// let arr = ["h", "e", "l", "l", "o"]
let arr = ["H","a","n","n","a","h"]
console.log(`reverseString: `, reverseString(arr))
