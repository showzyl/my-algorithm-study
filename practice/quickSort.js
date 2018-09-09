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

function partition(A, lo, hi) {
  const pivot = A[hi - 1]
  let i = lo
  let j = hi - 1
  while (i !== j) {
    if (A[i] <= pivot) {
      i++
    } else {
      swap(A, i, --j)
    }
  }
  swap(A, j, hi-1)
  return j
}

function quickSort(A, lo = 0, hi = A.length) {
  console.log(`lo: `, lo)
  console.log(`hi: `, hi)
  if (hi - lo <= 1) return
  const p = partition(A, lo, hi)
  quickSort(A, lo, p)
  quickSort(A, p+1, hi)
}

const A = [10, 80, 30, 90, 50, 40, 20]

quickSort(A)

console.log(`A: `, A)






