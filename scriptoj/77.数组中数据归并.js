"use strict"

// http://scriptoj.mangojuice.top/problems/77
// 有一个数组，这个数组从两个地方开始升序，一个是开始，一个是中间。例如：
//
// [10, 21, 32, 11, 16, 40] // 从 0 和 3 开始升序
// [1, 5, 10, 11, 3, 4, 8, 12, 30] // 0 和 4 开始升序
// 请你完成 merge 函数，可以把类似上面的数组变成一个完全升序的数组（直接修改原来的数组）。你不能用 sort 方法，并且只能使用一次循环。
//


const merge = (arr) => {
  let l = 0;
  let r = arr.length;
  let m = Math.floor((r - l) / 2)

  let a1 = arr.slice(l, m)
  let a2 = arr.slice(m, r)
  a1.push(Number.MAX_SAFE_INTEGER)
  a2.push(Number.MAX_SAFE_INTEGER)
  for (let i = 0, j = 0, k = l; k < r; k++) {
    if (a1[i] < a2[j]) {
      arr[k] = a1[i++]
    } else {
      arr[k] = a2[j++]
    }
  }
  return arr
}

// console.log(`res: `, merge([10, 21, 32, 11, 16, 40]))
console.log(`res: `, merge([1, 5, 10, 11, 3, 4, 8, 12, 30]))





