/**
 * 广度优先搜索
 * @param node
 */

function bfs(node) {
  const queue = [node]
  while (queue.length > 0){
    const first = stack.shift()
    console.log(`first key: `, first.key)
    // 子节点压栈
    first.childen.slice().reverse().forEach(
      child => queue.push(child)
    )
  }
}

