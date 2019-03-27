"use strict"

// 10. 2018年8月22日题目
// 在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数special找到这个不一样的值。


// function special(A) {
//   let evens = A.filter(a => a % 2 === 0)
//   let odds = A.filter(a => a % 2 !=== 0)
//   return evens.length === 1 ? evens[0] : odds[0]
// }

function special(A) {
  return A.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc[0].push(item)
    } else {
      acc[1].push(item)
    }
    return acc
  }, [[], []]).filter(item => item.length === 1)[0][0]
}

console.log(`res1: `, special([2, 4, 0, 100, 4, 11, 2602, 36])) // 11 唯一的奇数
// console.log(`res2: `, special([160, 3, 1719, 19, 11, 13, -21])) // 160 唯一的偶数










