let t = {
  n: {
    k: 1,
    y: 2,
    d: {
      a: 1,
      b: 2
    }
  },
  b: 3
}

function isObj(p) {
  return Object.prototype.toString.call(p) === '[object Object]'
}

function zip(t) {
  console.log(`t: `, t)
  let o = {}

  for (let k in t) {
    // console.log(`k: `, k)
    // console.log(`k: `, t[k])
    if(isObj(t[k])){
      // 是对象

    }else {
      // 不是
      o[k] = t[k]
    }
  }

  return o
}

console.log(`zip(t): `, zip(t)); // 返回以下结果
//
// {
//   b       : 3,
//   'n.k'   : 1,
//   'n.y'   : 2,
//   'n.d.a' : 1,
//   'n.d.b' : 2,
// }
