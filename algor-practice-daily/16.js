"use strict"

// 16. 2018年8月28日题目
// 素数是（不包括1）只能被自己1整除的数字，比如2、3、5、7、11、13……都是素数，写一个函数is_prime验证一个数字是否是素数。

// 2、3、5、7、11、13

const is_prime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return num !== 1
}

// console.log(`res1: `, is_prime(1))
// console.log(`res2: `, is_prime(100))
// console.log(`res3: `, is_prime(13))
console.log(`res3: `, is_prime(97))
// console.log(`res4: `, is_prime(179426549))
// console.log(`res5: `, is_prime(22801763489))
