// http://scriptoj.mangojuice.top/problems/56

// 完成 is 函数，它接受两个参数，你返回 true 和 false 来表示这两个参数是否有 相同的值。例如：
//
// is('foo', 'foo');     // true
// is(window, window);   // true
// is('foo', 'bar');     // false
// is([], []);           // false
// var test = { a: 1 };
// is(test, test);       // true
// is(null, null);       // true
// is(0, -0);            // false
// is(-0, -0);           // true
// is(NaN, 0/0);         // true

"use strict"


// // 最简方案
// const is = (x, y) => Object.is(x, y)


const is = (x, y) => {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x || y !== y
  }
}

let window = {}
let test = { a: 1 }
console.log(`res1: `, is('foo', 'foo'))
console.log(`res2: `, is(window, window))
// console.log(`res3: `, is('foo', 'bar'))
// console.log(`res4: `, is([], []))
// console.log(`res5: `, is(test, test))
// console.log(`res6: `, is(null, null))
// console.log(`res7: `, is(0, -0))
// console.log(`res8: `, is(-0, -0))
// console.log(`res9: `, is(NaN, 0/0))





