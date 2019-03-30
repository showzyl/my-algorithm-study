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


// const climbStairs = (n) => {
//   if(n === 1 || n === 2) return n
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// const climbStairs = (n) => {
//   // 用一个数组保存每一次的结果
//   let arr = []
//   for (let i = 1; i <= n; i++) {
//     if (i < 3) {
//       arr[i - 1] = i
//     } else {
//       // 逐一递推得到结果
//       arr[i - 1] = arr[i - 2] + arr[i - 3]
//     }
//   }
//   console.log(`arr: `, arr)
//   return n <= 0 ? 0 : arr[n - 1]
// }

// const climbStairs = (n) => {
//   let result = [1, 2];
//   for (let i = 2; i < n; i++) {
//     result.push(result[i - 1] + result[i - 2]);
//   }
//   console.log(`res: `, result)
//   return result[n - 1]
// }
//
//
// console.log(`res1: `, climbStairs(1)) // => 1
// console.log(`res2: `, climbStairs(2)) // => 2
// console.log(`res3: `, climbStairs(3)) // => 3
// console.log(`res4: `, climbStairs(4)) // =>
// // console.log(`res5: `, climbStairs(5)) // =>
// // console.log(`res6: `, climbStairs(6)) // =>
// // console.log(`res7: `, climbStairs(7)) // =>
// // console.log(`res8: `, climbStairs(8)) // =>
// // console.log(`res9: `, climbStairs(9)) // =>





