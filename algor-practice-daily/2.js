/**
 * 写一个函数求数组的最大值和最小值
 * highAndLow("1 2 3 4 5"); // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"   // "C-Ww-Aaa-Tttt"
 * @returns {string}
 */

// function highAndLow(str) {
//   let a = str.split(' ').sort((a, b) => a - b)
//   return `${a[a.length - 1]} ${a[0]}`
// }

function highAndLow(str) {
  let aTmp = str.split(' ')
  let min = Math.min.apply(null, aTmp)
  let max = Math.max.apply(null, aTmp)
  return `${max} ${min}`
}


// console.log(`res1: `, highAndLow("1 2 3 4 5"))
// console.log(`res2: `, highAndLow("1 2 -3 4 5"))
console.log(`res3: `, highAndLow("1 9 3 4 -5"))

