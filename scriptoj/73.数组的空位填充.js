"use strict"


let a = [, , , undefined];

const fillEmpty = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      arr[i] = 'Hello'
    }
  }
  return arr
}

console.log(`res: `, fillEmpty(a))


