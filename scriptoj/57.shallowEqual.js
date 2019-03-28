// http://scriptoj.mangojuice.top/problems/57
"use strict"

// 在 React、Redux 当中，经常会用到一种 shallowEqual 来做性能优化。
// shallowEqual 结合 immutable 的共享数据结构可以帮助我们简单地检测到哪些数据没有发生变化，就不需要做额外的渲染等操作，优化效果拨群。
// 简单来说，shallowEqual 接受两个参数，如果这两个参数的值相同、
// 或者这两个参数都是对象并且对象的第一层数据相同，那么就返回 true；否则就返回 false。例如：

// 用原型链的方法
// const hasOwn = Object.prototype.hasOwnProperty
//
// // 这个函数实际上是Object.is()的polyfill
// function is(x, y) {
//   // SameValue algorithm
//   if (x === y) {
//     // 处理为+0 != -0的情况
//     return x !== 0 || 1 / x === 1 / y
//   } else {
//     // 处理 NaN === NaN的情况
//     return x !== x && y !== y
//   }
// }
//
// const shallowEqual = (x, y) => {
//   // 首先对基本数据类型的比较
//   if (is(x, y)) return true
//   // 由于Obejct.is()可以对基本数据类型做一个精确的比较， 所以如果不等
//   // 只有一种情况是误判的，那就是object,所以在判断两个对象都不是object
//   // 之后，就可以返回false了
//   if (typeof x !== 'object' || x === null ||
//     typeof y !== 'object' || y === null) {
//     return false
//   }
//
//   // 过滤掉基本数据类型之后，就是对对象的比较了
//   // 首先拿出key值，对key的长度进行对比
//   const keysA = Object.keys(x)
//   const keysB = Object.keys(y)
//
//   // 长度不等直接返回false
//   if (keysA.length !== keysB.length) return false
//   // key相等的情况下，在去循环比较
//   for (let i = 0; i < keysA.length; i++) {
//     // key值相等的时候
//     // 借用原型链上真正的 hasOwnProperty 方法，判断y里面是否有A的key的key值
//     // 属性的顺序不影响结果也就是{name:'daisy', age:'24'} 跟{age:'24'，name:'daisy' }是一样的
//     // 最后，对对象的value进行一个基本数据类型的比较，返回结果
//     if (!hasOwn.call(y, keysA[i]) ||
//       !is(x[keysA[i]], y[keysA[i]])) {
//       return false
//     }
//   }
//
//   return true
// }

const shallowEqual = (x, y) => {
  if (typeof x !== typeof y) return false
  if (typeof x !== 'object') {
    return Object.is(x, y)
  } else {
    if (x === null || y === null) return x === y
    let keys1 = Object.keys(x), keys2 = Object.keys(y)
    if (keys1.length !== keys2.length) return false
    return keys1.every(d => Object.is(x[d], y[d]))
  }
}

let window = {}
// console.log(`res1: `, shallowEqual(1, 1)) // true
// console.log(`res2: `, shallowEqual(1, 2)) // false
// console.log(`res3: `, shallowEqual('foo', 'foo')) // true
// console.log(`res4: `, shallowEqual(window, window)) // true
// console.log(`res5: `, shallowEqual('foo', 'bar')) // false
// console.log(`res6: `, shallowEqual([], [])) // true
// console.log(`res7: `, shallowEqual([1, 2, 3], [1, 2, 3])) // true
console.log(`res8: `, shallowEqual({name: 'Jerry'}, {name: 'Jerry'})) // true














