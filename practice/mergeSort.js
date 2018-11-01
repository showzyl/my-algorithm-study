/**
 *
 * Created by showzyl on 2018/8/30
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

/**
 * v1
 * @param A
 * @param l
 * @param r
 */
function mergeSort(A, l, r) {
  if (r - l < 2) return
  let m = Math.ceil((l + r) / 2)
  mergeSort(A, l, m)
  mergeSort(A, m, r)
  merge(A, l, m, r)
}

function merge(A, l, m, r) {
  const A1 = A.slice(l, m) // left
  const A2 = A.slice(m, r) // right
  A1.push(Number.MAX_SAFE_INTEGER)
  A2.push(Number.MAX_SAFE_INTEGER)
  for (let k = l, i = 0, j = 0; k < r; k++) {
    if (A1[i] < A2[j]) {
      A[k] = A1[i++]
    } else {
      A[k] = A2[j++]
    }
  }
}

let A = [20, -10, 100, 5, 2, 8]
mergeSort(A, 0, A.length)
console.log(`A: `, A)
