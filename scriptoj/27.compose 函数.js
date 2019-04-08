// http://scriptoj.mangojuice.top/problems/27

"use strict"

const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2

// console.log(`res: `, div2(mul3(add1(add1(0))))) // => 3
//
// 而这样的写法可读性明显太差了。我们可以构建一个 compose 函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后 compose 返回的也是一个函数，达到以下的效果：
//
// const operate = compose(div2, mul3, add1, add1)
// operate(0) // => 相当于 div2(mul3(add1(add1(0))))
// operate(2) // => 相当于 div2(mul3(add1(add1(2))))
// 简而言之：compose 可以把类似于 f(g(h(x))) 这种写法简化成 compose(f, g, h)(x)。请你完成 compose 函数的编写。
//
// 额外挑战：你能通过 1~2 行代码实现 compose 吗。


const compose = (...arg) => {
  return (x) => {
    let res = x
    for (let i = arg.length - 1; i >= 0; i--) {
      res = arg[i](res)
    }
    return res
  }
}

// const compose = (...arg) => {
//   return (x) => {
//     return [...arg].reduceRight((acc, item) => {
//       return item(acc)
//     }, x)
//   }
// }

// console.log(`re: `, compose(div2, mul3, add1))


const operate = compose(div2, mul3, add1, add1)
console.log(`res: `, operate(2)) // => 相当于 div2(mul3(add1(add1(0))))


// const add1 = (x) => x + 1
// const mul3 = (x) => x * 3
// const div2 = (x) => x / 2














