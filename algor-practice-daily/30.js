'use strict'

// 30.2018年9月11日题目
// sort('javascript') // aacijprstv
// sort('dbca') // abcd


// 计数排序
function countSort(str) {
  let A = [...str].map(item => item.toLowerCase().charCodeAt(0))
  console.log(`tmpArr: `, A)
  let max = Math.max(...A)
  // 累计数组
  let B = [...Array(max + 1)].fill(0)
  // 结果数组
  let C = Array(A.length)
  // 累计位递增
  A.forEach((_, i) => B[A[i]]++)

  // 累计求和
  for (let i = 1; i < B.length; i++) {
    B[i] = B[i - 1] + B[i]
  }
  // console.log(`B: `, B)

  // 回写
  for (let i = 0; i < A.length; i++) {
    const p = B[A[i]] - 1
    B[A[i]]--
    C[p] = A[i]
    // C[p] = str[i]
  }

  // console.log(`C: `, C.join(''))
  C = C.map(item => String.fromCharCode(item))
  return C
}

// let A = [5, 1, 5, 8]
let A = 'javascript'
console.log(`res: `, countSort(A))














