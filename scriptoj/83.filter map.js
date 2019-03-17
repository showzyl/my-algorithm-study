// 请你给原生的 Map 添加方法 filterKeys 和 filterValues，可以类似于于数组方法的 filter。它们分别可以对 Map 的键和值进行筛选，它们会返回一个新的 Map， 是对原有的 Map 的筛选结果，例如：
//
// const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])
//
// m.filterKeys((key) => key.startsWith('J')) // => Map { Jerry => 12, Jimmy => 13 }
// m.filterValues((val) => val >= 13) // => Map { Jimmy => 13, Tomy => 14  }
//
// // 原有的 map 保持不变
// console.log(m) // => Map { Jerry => 12 , Jimmy => 13, Tomy => 14 }


"use strict"

// http://scriptoj.mangojuice.top/problems/83

const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])

Map.prototype.filterKeys = function (condition) {
  console.log(`ctx: `, this)
  let resMap = new Map()
  console.log(`condition: `, condition('J'))
  for (let item of this.keys()) {
    // console.log(item)
    if(condition(item)){
      resMap.set(item, this.get(item))
    }
  }
  console.log(`resMap: `, resMap)
  return resMap
}

Map.prototype.filterValues = function (condition) {
  let resMap = new Map()
  for (let item of this.entries()) {
    console.log(item[0], item[1])
    if(condition(item[1])){
      resMap.set(item[0], item[1])
    }
  }
  return resMap
}

// m.filterKeys((key) => key.startsWith('J'))
m.filterValues((val) => val >= 13)




