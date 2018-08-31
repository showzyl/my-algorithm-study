/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

// // 最慢
// function fibonacci(n) {
//   if (n < 2) return n
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(`fibonacci(10): `, fibonacci(5))

// 优化版1
// let cache = {
//   0: 0,
//   1: 1
// }
// function fibonacci(n) {
//   return typeof cache[n] === "number"
//           ? cache[n]
//           : cache[n] = fibonacci(n-2) + fibonacci(n-1)
// }
//
// console.log(`fibonacci(10): `, fibonacci(6))


// 尾递归
function fibonacci(n, n1, n2) {
  if (n === 0) return n1
  return fibonacci(n - 1, n2, n1 + n2)
}

console.log(`fibonacci(10): `, fibonacci(3, 0, 1))

// 3
// f(2, 1, 1)
// f(1, 1, 1)
// f(1)

// 2
// f(1, 1, 1)
// f(1)








