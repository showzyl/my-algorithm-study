'use strict'

// 22. 2018年9月3日题目
// 封装一个函数sequence对一个无限序列求值。函数接收一个lambda表达式代表一个无限序列，然后提供两个操作take和takeWhile


// sequence( n => n * n ).take(5) // [0, 1, 4, 9, 16]
// sequence( n => n * 4 ).takeWhile( n => n < 20 ) // [0, 4, 8, 12, 16]


function sequence(cb) {
  console.log(`cb: `, cb)
  let resArr = []
  return {
    take(number) {
      let i = 0
      while (i < number) {
        resArr.push(cb(i++))
      }
      return resArr
    },
    takeWhile(fn) {
      let i = 0
      let tmp = 0
      while (true) {
        tmp = cb(i++)
        if (fn(tmp)) {
          // tmp = cb(i++)
          resArr.push(tmp)
        } else {
          return resArr
        }
      }
      // return resArr
    }
  }
}

// console.log(`res1: `, sequence(n => n * n).take(5))
console.log(`res2: `, sequence(n => n * 4).takeWhile(n => n < 20))


