'use strict'


const dataTree = {
  root: ['bar', 'foo', 'baz'],
  bar: ['bar1', 'bar2', 'bar3'],
  foo: ['foo1', 'foo2', 'foo3'],
  baz: ['baz1', 'baz2', 'baz3']
}

travelTree(dataTree)

function travelTree(dataTree) {
  let s = `root`
  let o = {}
  let keys = Object.keys(dataTree)

  keys.forEach((item, i) => {
    if(item !== s){
      o[keys[i]] = dataTree[keys[i]]
    }
  })

  for (let k in o) {
    s += `\n ${k}`
    for (let i = 0; i < o[k].length; i++) {
      s += `\n`
      s += `  ${o[k][i]}`
    }
  }
  console.log(s)
  return s
}


// root
//   bar
//     bar1
//     bar2
//     bar3
//   foo
//     foo1
//     foo2
//     foo3
//   baz
//     baz1
//     baz2
//     baz3









