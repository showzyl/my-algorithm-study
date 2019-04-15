// 'use strict'

// 17. 2018年8月29日题目
// 柯里化函数curry是这样一个函数，它将一个接受多参数的函数，转换成为接收连续单参数的高阶函数（可以被连续调用）。
//
// 例如：
//


// function curry(cb) {
//
//   // console.log(`cb.length: `, cb.length)
//   // let count = 0
//   // let fn = function (...arg) {
//   //   count++
//   //   if (cb.length < count) {
//   //     return fn()
//   //   } else {
//   //
//   //   }
//   // }
//   // const g = (...allArgs) => allArgs.length >= func.length ?
//   //   func(...allArgs) : (...args) => g(...allArgs, ...args)
//   // return g
//
//   // const fn = function(...allArgs) {
//   //   if (allArgs.length >= cb.length) {
//   //     return cb(...allArgs)
//   //   } else {
//   //     return function(...args){
//   //       return fn(...allArgs, ...args)
//   //     }
//   //   }
//   // }
//   //
//   // return fn
//
//
//   let fn = function (...allArgs) {
//     if (allArgs.length >= cb.length) {
//       return cb(...allArgs)
//     } else {
//       return function (...args) {
//         return fn(...allArgs, ...args)
//       }
//     }
//   }
//
//   return fn
// }

// Todo next time
const curry = cb => {

}

function _add(a, b, c, d) {
  return a + b + c + d
}

const add = curry(_add)

console.log(add(1)) // 函数
console.log(add(1)(2)) // 函数
console.log(add(1)(2)(3)) // 函数
console.log(add(1)(2)(3)(4)) // 10


// const pow = curry(Math.pow)
// pow(10)(2) // 100














