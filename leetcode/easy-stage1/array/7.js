/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/
 */

const plusOne = function (digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    // 非9加1
    if (digits[i] < 9) {
      digits[i]++;
      console.log(`digits: `, digits)
      return digits;
    }
    // 逢9置0
    digits[i] = 0;
  }
  // 全部为9，则需要数组扩充1位
  // let result = new Array(n + 1);
  let result = [];
  result[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    result[i] = 0
  }
  console.log(`result: `, result)
  return result;
};

// [1,2,3]
// [1,2,4]
plusOne([9, 9])
