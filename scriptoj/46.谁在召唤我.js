// http://scriptoj.mangojuice.top/problems/46
// 好问题
"use strict"

// 实现一个函数 where，它返回它被调用的时候所在的函数的名字，例如：


// 思想是正则匹配 new Error
const where = () => {
  console.log(`: `, (new Error()).stack)
  const reg = /^\s*(?:at)\s*(\w+)/gm
  // const reg = /at\s(\w+)\s\(/g
  console.log(`res: `, reg.exec((new Error()).stack))
  return reg.exec((new Error()).stack)[1]
}

function main () {
  where() // => 'main'
}

function a () {
  function b () {
    where() // => 'b'
  }
  b()
}

// main()
a()
