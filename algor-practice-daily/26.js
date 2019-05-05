'use strict'

// 26.2018年9月7日题目
// 一个组已经几乎被排序好了，除了部分数字外。 写一个排序算法对他们进行排序。

/**
 * 插入排序
 * @param A
 */

function sort(A) {
  for (let i = 1; i < A.length; i++) {
    insert(A, i, A[i])
  }
  console.log(`A: `, A)
  return A
}

function insert(A, i, x) {
  let p = i - 1
  while (p >= 0 && A[p] > x) {
    A[p + 1] = A[p]
    p--
  }
  A[p + 1] = x
}


const A = [1, 2, 3, 1, 1, 0, 5, 5, 5, 5, 7]
console.log(`res: `, sort(A))













