// http://scriptoj.mangojuice.top/problems/61

// 在前端的 MVVM 框架当中，我们经常需要监听数据的变化，而数组是需要监听的重要对象。
// 请你完成 ObserverableArray，它的实例和普通的数组实例功能相同，但是当调用：
// 这些方法的时候，除了执行相同的操作，还会把方法名打印出来。 例如：
// const arr = new ObserverableArray()
//
// arr.push('Good') // => 打印 'push'，a 变成了 ['Good']
// 注意，你不能修改 Array 的 prototype。还有函数 return 的值和原生的操作保持一致。


"use strict"

function ObserverableArray() {
  return new Proxy([], {
    get(target, propKey) {
      const matArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
      // ;matArr.indexOf(propKey) > -1 && console.log(propKey)
      ;matArr.includes(propKey) && console.log(propKey)
      return target[propKey]
    }
  })
}

const arr = new ObserverableArray('c', 'd', 'e')
arr.push('Good', 'test', 'a', 'v')



