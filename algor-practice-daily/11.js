"use strict"

// 11. 2018年8月23日
// 写一个函数reverse反转一个数组A
// 要求：
// 不可以使用Array.reverse
// 请不要创建新数组

function reverse(A) {
  const len = A.length
  for (let i = 0; i < len / 2; i++) {
    exchange(A, i, len - i - 1)
  }
  return A
}

function exchange(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

// console.log(`res1: `, reverse([1, 2, 10, 4, 5]))
console.log(`res1: `, reverse([1, 2, 3, 4, 5, 6, 7]))










