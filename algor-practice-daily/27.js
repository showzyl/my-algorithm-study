'use strict'

// 27.2018年9月8日题目
// 写一个函数sort按照元素出现的频率排序一个数组。如果数字出现频率一样，那么从小到大排序。

function sort(A) {
  let freq = {}
  A.reduce((acc, item) => {
    freq[item] ? freq[item]++ : freq[item] = 1
    return acc
  }, freq)
  console.log(`freq: `, freq)
  return A.sort((a, b) => freq[b] - freq[a] || a - b)
}

const A = [1, 2, 3, 1, 1, 0, 5, 5, 5, 5, 7]
console.log(`res: `, sort(A))











