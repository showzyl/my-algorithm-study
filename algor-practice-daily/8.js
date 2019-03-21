// 写一个函数solution，求比一个数字n小的所有3和5的整数倍数和。
// 比如10，比它小的3、5整数倍数有： 3,5,6,9， 所以和为23。 比如16， 比它小的3，5整数倍数有： 3,5,6,9,10,12,15，所以和为60（15只计算1次）
//
// 示例
// solution(10) // 23
// solution(16) // 60

function solution(num) {
  let map = new Map()
  for (let i = 1; i < num; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !map.has(i)) {
      map.set(i, i)
    }
  }

  let res = 0
  map.forEach(item => {
    res += item
  })
  return res
}

// function solution(number){
//   if(number < 0) return 0
//   return [...Array(number).keys()]
//     .filter(n => n % 3 === 0 || n % 5 === 0)
//     .reduce((a, b) => a + b,0)
// }

console.log(`res1: `, solution(10))
console.log(`res2: `, solution(16))




