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
    // 循环不变式
    // k 下一个写入位置
    // i: A1 中回写位置
    // j: A2 中回写位置
    if (A1[i] < A2[j]) {
      A[k] = A1[i++]
    } else {
      A[k] = A2[j++]
    }
  }
}

// 普通写法
function merge2(a, l, m, r) {
  let a1 = a.slice(l, m)
  let a2 = a.slice(m, r)
  let i = 0, j = 0, k = l
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      a[k++] = a1[i++]
    } else {
      a[k++] = a2[j++]
    }
  }
  while (i < a1.length) {
    a[k++] = a1[i++]
  }
  while (j < a2.length) {
    a[k++] = a2[j++]
  }
  console.log(`res: `, a)
}

let A = [20, -10, 100, 5, 2, 8]
mergeSort(A, 0, A.length)
console.log(`A: `, A)
