"use strict"

// http://scriptoj.mangojuice.top/problems/71

// 编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），
// 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。
// 请你完成 uniqueNums 的编写。

const uniqueNums = (n) => {
  let resArr = []
  while (resArr.length < n) {
    let num = rangeNum(2, 33)
    if (resArr.indexOf(num) === -1) resArr.push(num)
  }
  return resArr
}

function rangeNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

console.log(`res: `, uniqueNums(2))

// // 优雅
// const uniqueNums = (n) => {
//   return [...(new Array(31)).keys()]
//     .map((i) => i + 2)
//     .sort(() => Math.random() - Math.random())
//     .slice(0, n)
// }

// uniqueNums(31)
