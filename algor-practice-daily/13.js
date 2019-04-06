"use strict"

// 13. 2018年8月25日题目
// 请实现一个递归版本的reverse函数，反转一个数组

//
// function reverse(A, start, end) {
//   console.log(`start: `, start)
//   console.log(`end: `, end)
//   if(start === end) return
//   exchange(A, start, end)
//   reverse(A, ++start, --end)
// }
//
// function exchange(A, i, j) {
//   [A[i], A[j]] = [A[j], A[i]]
// }

function reverse(A){
  console.log(`A: `, A)
  return A.length ? reverse( A.slice(1) ).concat(A[0]) : A
}


const A = [1, 2, 3, 4, 5, 6, 7]
console.log(`res1: `, reverse(A, 0, A.length - 1))
// console.log(`res2: `, rotate(A, 2))
// console.log(`res3: `, rotate(A, 3))





