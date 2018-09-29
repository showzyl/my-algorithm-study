function compatible(p, q, n) {
  const [x1, y1] = [~~(p / n), p % n]
  const [x2, y2] = [~~(q / n), q % n]
  return x1 !== x2 && y1 !== y2 && Math.abs(x1 - x2) !== Math.abs(y1 - y2)
}

function isGoal(n, decisions) {
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (i === j) {
        continue
      }
      const p = decisions[i]
      const q = decisions[j]
      if (!compatible(p, q, n)) {
        return false
      }
    }
  }
  return true
}


function queen(n, decisions = [], hset = {}) {
// function queen(n, decisions = []) {
  if (decisions.length === n) {
    decisions.sort((a, b) => a - b)
    const hash = decisions.join('-')
    if (hset[hash]) return []
    hset[hash] = 1
    return isGoal(n, decisions) ? [decisions] : []
  }

  let r = []
  for (let i = 0; i < n * n; i++) {
    if (decisions.indexOf(i) === -1) {
      r = r.concat(queen(n, decisions.concat(i), hset))
      // r = r.concat(queen(n, decisions.concat(i)))
    }
  }
  return r
}

console.log(`queen: `, queen(4))











