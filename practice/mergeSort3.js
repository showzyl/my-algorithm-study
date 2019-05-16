/**
 *
 * Created by showzyl on 2018/8/30
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

/**
 * v3 循环代替递归(尝试)
 * @param A
 */
function mergeSort(A) {
  for (let i = 1; i < A.length; i+=i) {
    const step = i * 2
    for (let start = 0; start < A.length; start += step) {
      const end = Math.min(start + step, A.length)
      if(end - start > 1){
        const mid = start + i
        merge(A, start, mid, end)
      }
    }
  }
  return A
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
console.log(`A: `, mergeSort(A))
