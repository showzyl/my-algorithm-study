"use strict"

// 15. 2018年8月27日题目
// 写一个函数flat展平一个数组
//
// flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]

// function flat(A){
//   return A.reduce((acc, item) => {
//     return acc.concat(Array.isArray(item) ? flat(item) : item)
//   }, [])
// }

function flat(arr){
  return [].concat(...arr.map(x => Array.isArray(x) ? flat(x) : x))
}

const A = [1,[2,'a',[5,6]],8]
console.log(`res: `, flat(A))




