'use strict'

// 23. 2018年9月4日题目
// 写一个函数find_missing(A, low, high)，给定一个范围[low,high]，寻找一个数组中缺失的元素。
//
// find_missing([10, 12, 11, 15], 10, 15) // [13,14]
// // 注: low=10 high = 15
//
// find_missing([1, 14, 11, 51, 15],50, 55) // [50, 52, 53, 54]
// // 注：low = 50, high = 55


function find_missing(A, low, high) {
  let allArr = [...Array(high - low)].map((_, i) => low + i)
  let tmpSet = new Set(A)
  return [...new Set(allArr.filter(x => !tmpSet.has(x)))]
}


// function find_missing(A, low, high) {
//   const B = A.filter(x => x >= low && x < high).sort((x, y) => x - y)
//   console.log(`B: `, B)
//   let res = [...Array(high - low)].map((_, i) => i + low)
//
//   console.log(`res: `, res)
//   // i + low
//   // })
//   // console.log(`Array.from(low): `)
// }


// function find_missing(A, low, high) {
//   let tmpArr = [], resArr = []
//   for (let i = low; i < high; i++) {
//     tmpArr.push(i)
//   }
//   tmpArr.forEach(item => {
//     if(!A.includes(item)){
//       resArr.push(item)
//     }
//   })
//   return resArr
// }

// console.log(`res1: `, find_missing([10, 12, 11, 15], 10, 15)) // [13,14]
console.log(`res2: `, find_missing([1, 14, 11, 51, 15],50, 55)) // [50, 52, 53, 54]


