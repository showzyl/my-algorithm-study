// http://scriptoj.mangojuice.top/topic/135/68-%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B1%85%E4%B8%AD%E8%A1%A5%E5%85%A8

const centerPad = (str, len, pad) => {
  let strLen = str.length
  let half = (len - strLen) / 2
  let start = str.padStart(half + strLen, pad)

  if ((len - strLen) % 2 !== 0) {
    return start + ''.padEnd(half + 1, pad)
  } else {
    return start + ''.padEnd(half, pad)
  }
}

// console.log(`res: `, centerPad('Hello', 13, 'abc'))
// console.log(`res: `, centerPad('Gook Luck!', 30, '*~'))
// console.log(`res: `, centerPad('Hello', 10, 'abc') )
console.log(`res: `, centerPad('Hello', 1, 'abc') )
