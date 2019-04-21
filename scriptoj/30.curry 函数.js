// http://scriptoj.mangojuice.top/problems/30

"use strict"

// 函数式编程当中有一个非常重要的概念就是 函数柯里化。一个接受 任意多个参数 的函数，如果执行的时候传入的参数不足，那么它会返回新的函数，新的函数会接受剩余的参数，直到所有参数都传入才执行操作。这种技术就叫柯里化。请你完成 curry 函数，它可以把任意的函数进行柯里化，效果如下：
//
// const f = (a, b, c d) => { ... }
// const curried = curry(f)
// curried(a, b, c, d)
// curried(a, b, c)(d)
// curried(a)(b, c, d)
// curried(a, b)(c, d)
// curried(a)(b, c)(d)
// curried(a)(b)(c, d)
// curried(a, b)(c)(d)
// // ...
// // 这些函数执行结果都一样
// // 经典加法例子
// const add = curry((a, b) => a + b)
// const add1 = add(1)
//
// add1(1) // => 2
// add1(2) // => 3
// add1(3) // => 4
// 注意，传给 curry 的函数可能会有任意多个参数。

// const curry = (cb, ...aTmp) => {
//   console.log(`cb: `, cb.length)
//   let len = cb.length
//   return function (...a) {
//     return function (...b) {
//       return cb(...a, ...b)
//     }
//   }
// }

// // 牛x写法
// const curry = (f, ...arr) => (...args) =>
//   arr.length + args.length >= f.length
//     ? f(...arr, ...args)
//     : curry(f, ...arr, ...args)

const curry = (f, ...arr) => {
  return function (...args) {
    if (arr.length + args.length >= f.length) {
      return f(...arr, ...args)
    } else {
      return curry(f, ...arr, ...args)
    }
  }
}

const add = curry((a, b) => a + b)
const add1 = add(1)

// console.log(`res1: `, add1(1))
// console.log(`res2: `, add1(2))
console.log(`res3: `, add1(3))




























