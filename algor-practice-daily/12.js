"use strict"

// 12. 2018年8月24日题目
// 定义数组的旋转操作rotate(A, amount)，让数尾部amount个元素移动到头部。
// 例如数组: A=[1,2,3,4,5,6,7]
// rotate(A, 1) // [7,1,2,3,4,5,6]
// rotate(A, 2) // [6,7,1,2,3,4,5]
// rotate(A, 3) // [5,6,7,1,2,3,4]


// function rotate(A, n) {
//   return A.splice(-n).concat(A)
// }

function reverse(A, start, end) {
  for (let i = 0; i < (end - start + 1) / 2; i++) {
    const t = A[start + i]
    A[start + i] = A[end - i]
    A[end - i] = t
  }
}

function rotate(A, amount) {
  reverse(A, 0, A.length - 1)
  reverse(A, 0, amount - 1)
  reverse(A, amount, A.length - 1)
}

const A = [1, 2, 3, 4, 5, 6, 7]
// console.log(`res1: `, rotate(A, 1))
console.log(`res2: `, rotate(A, 2))
console.log(`A: `, A)
// console.log(`res3: `, rotate(A, 3))





