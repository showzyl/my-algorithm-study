"use strict"

// http://scriptoj.mangojuice.top/problems/99

// 有时候我们需要访问一个对象较深的层次，但是如果这个对象某个属性不存在的话就会报错，例如：
//
// var data = { a: { b: { c: 'ScriptOJ' } } }
// data.a.b.c // => scriptoj
// data.a.b.c.d // => 报错，代码停止执行
// console.log('ScriptOJ') // => 不会被执行
// 请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如：


const safeGet = (data, path) => {
  return path.split('.').reduce((acc, item, i, arr) => {
    if (acc[item]) {
      return acc[item]
    } else if (i !== arr.length - 1) {
      return {}
    } else {
      return undefined
    }
  }, data)
}


let data = {a: {b: {c: 'ScriptOJ'}}}

// console.log(`res: `, safeGet(data, 'a.b.c'))
// console.log(`res: `, safeGet(data, 'a.b.c.d'))
console.log(`res: `, safeGet(data, 'a.b.c.d.e.f.g'))



