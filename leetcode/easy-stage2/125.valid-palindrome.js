/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * Example 2:
 * Input: "race a car"
 * Output: false
 *
 */


/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.replace(/([^\w])/ig, '').toLowerCase()
  console.log(`s: `, s)
  let len = s.length
  for (let i = 0; i < len; i++) {
    // console.log(`i: `, s[i])
    // console.log(`len: `, s[len - i - 1])
    if (s[i] !== s[len - i - 1]) return false
  }
  return true
}

let s = 'A man, a plan, a canal: Panama'
// let s = 'race a car'
console.log(`re: `, isPalindrome(s))



