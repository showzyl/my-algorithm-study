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

console.log(`res1: `, solution(10))
console.log(`res2: `, solution(16))




