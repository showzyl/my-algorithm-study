"use strict"

// 写一个二分查找函数bsearch，和之前学习的二分查找函数有一定的变化。
//
// function bsearch(A, x) {
//   /// TODO
// }
// A是一个已排序的数组，x是目标值。
//
// 如果找到目标值，返回目标值在数组中的序号。
// 如果没有找到目标值，返回目标值应该被插入的位置
// 比如数组: A=3,5,7,13,22,25


function bSearch(A, x) {
  let l = 0
  let r = A.length - 1
  let guess
  while (l <= r) {
    guess = Math.floor((l + r) / 2)
    if (A[guess] === x) {
      return guess
    } else if (A[guess] > x) {
      if (A[guess - 1] < x || guess === 0) return guess
      r = guess - 1
    } else {
      if(A[guess + 1] > x || guess === (A.length - 1)) return guess + 1
      l = guess + 1
    }
  }
  return -1
}

const A = [3, 5, 7, 13, 22, 25]
// const A = [1, 2, 3, 4, 5, 6, 7, 8, 13, 22, 25]
console.log(`res1: `, bSearch(A, 5)) // 1
console.log(`res2: `, bSearch(A, 13)) // 3
console.log(`res3: `, bSearch(A, 4)) // 1
console.log(`res4: `, bSearch(A, -1))  // 0
console.log(`res5: `, bSearch(A, -1000)) // 0
console.log(`res6: `, bSearch(A, 30)) // 6










