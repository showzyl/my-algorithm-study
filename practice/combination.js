/**
 * 组合
 * @param S 数组，需要求组合的集合
 * @param k 取出元素个数
 * @returns
 */
function combination(S, k) {
  if (k === 0 || S.length === k) {
    return [S.slice(0, k)]
  }
  const [first, ...others] = S
  let r = []
  r = r.concat(combination(others, k - 1)).map(c => [first, ...c])
  r = r.concat(combination(others, k))
  return r
}

const S = ['A', 'B', 'C', 'D']
console.log(`combination: `, combination(S, 2))







