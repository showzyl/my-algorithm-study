'use strict'

// 某AI创业公司前端团队面试题，写一个函数sort，对一个只有字符的数组进行排序，
// 比如说['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']
// 要求：
//
// 大写在前，小写在后
// 大小写字母之间的顺序不能改变，比如AaBbCcDd排序后应该是ABCDabcd。
// 不能使用额外空间。

function sort(A) {
  for (let i = A.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (A[j - 1].charCodeAt() > A[j].charCodeAt()) {
        // swap(arr, j - 1, j)
        // console.log(`A[j]: `, A[j])
        // console.log(`A[j]: `, A[j].charCodeAt())
        swap(A, j - 1, j)
      }
    }
  }
  // console.log(`A: `, A)
  return A
}

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

let A = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']
console.log(`res: `, sort(A))













