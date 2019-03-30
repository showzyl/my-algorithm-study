"use strict"

// http://scriptoj.mangojuice.top/topic/81/48-%E9%97%B4%E8%B0%8D%E6%B4%BB%E5%8A%A8

const spy = function(cb) {
  let calls = []
  let fn = function() {
    let obj = {
      args: [...arguments],
      result: cb.apply(this, arguments)
    }
    calls.push(obj)
    return obj.result
  }
  fn.calls = calls
  return fn
}

let america = (a, b) => a + b

america = spy(america)
console.log(`res: `, america(1, 2)) // => 3
console.log(`america: `, america.calls)
// console.log(`spy: `, spy)

console.log(`res: `, america(3, 4)) // => 3
console.log(`america: `, america.calls)


// let user = {
//   name: 'Jerry',
//   getName () {
//     return this.name
//   }
// }
//
// user.getName = spy(user.getName)
// console.log(`res1: `, user.getName()) // => 'Jerry'
// console.log(`res2: `, user.getName.calls[0].result)









