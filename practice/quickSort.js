/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

function partition(A, l, r) {
  const pivot = A[r - 1]
  let i = l
  let j = r - 1
  // 小于中心点范围：[l, i)
  // 未确认范围：[i, j)
  // 大于中心点范围：[j, r-1)
  while (i !== j) {
    if (A[i] <= pivot) {
      i++
    } else {
      swap(A, i, --j)
    }
  }
  swap(A, j, r-1)
  return j
}

function quickSort(A, l = 0, r = A.length) {
  // console.log(`l: `, l)
  // console.log(`r: `, r)
  if (r - l <= 1) return
  const p = partition(A, l, r)
  quickSort(A, l, p)
  quickSort(A, p+1, r)
}

const A = [10, 80, 30, 90, 50, 40, 20]

quickSort(A)

console.log(`A: `, A)






