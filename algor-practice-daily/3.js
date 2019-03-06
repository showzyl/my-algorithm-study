/**
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
 * XO("zzoo") => false
 */


function XO(str) {
  let aTmp = str.split('')
  let res = aTmp.reduce((acc, item) => {
    // console.log(`item: `, item)
    item === 'o' && (acc['o'] += 1)
    item === 'x' && (acc['x'] += 1)
    return acc
  }, {
    o: 0,
    x: 0
  })
  return res['o'] === res['x']
  // console.log(`res: `, res)
}


// console.log(`res1: `, XO("ooxx"))
// console.log(`res2: `, XO("xooxx"))
// console.log(`res3: `, XO("xooxx"))
// console.log(`res4: `, XO("zpzpzpp"))

