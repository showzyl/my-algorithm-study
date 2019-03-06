/**
 * accum("abcd");    // "A-Bb-Ccc-Dddd"
 * accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt");    // "C-Ww-Aaa-Tttt"
 * @returns {string}
 */
function accum(str) {
  return str.split('').map((item, i) => {
    return `${item.toUpperCase()}${item.toLowerCase().repeat(i)}`
  }).join('-')
}

// function repeat(item, times) {
//   let res = ``
//   for (let i = 0; i < times; i++) {
//     if (i === 0) {
//       res += item.toUpperCase()
//     } else {
//       res += item
//     }
//   }
//   return `-${res}`
// }

// repeat('a', 3)

console.log(`res1: `, accum("abcd"))
// console.log(`res2: `, accum("RqaEzty"))
// console.log(`res3: `, accum("cwAt"))
// console.log(`res4: `, accum("cwAt"))
