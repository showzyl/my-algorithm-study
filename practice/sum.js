/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

// 循环和递归方式实现`sum`函数


// function sum(n) {
//   let i = 0
//   let r = 0
//   while (i <= n){
//     r += i
//     i++
//   }
//   return r
// }


// function sum(n) {
//   return Array(n).fill(0).reduce((cur, pre, i, a) => cur + (i+1)) + 1
// }


// function sum(n) {
//   let r = 0
//   for (let i = 0; i <= n; i++) {
//     r += i
//   }
//   return r
// }

// function sum(n, r = n, i = n) {
//   if(i === 1) return r
//   return sum(n, r += (--i), i)
// }

// function sum(n, r = 0, i = 0) {
//   console.log(`r: `, r)
//   if(i === n) return r
//   return sum(n, r += (++i), i)
// }

// function sum(n, i = 0) {
//   console.log(`i: `, i)
//   let r = []
//   if (i < n) {
//     r = r.concat(sum(n, ++i))
//   }
//   return r
// }
//
// console.log(`sum: `, sum(4))




console.log(`sum(n): `, sum(4))

