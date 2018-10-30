/**
 * 深度优先搜索
 * @param node
 */

function dfs(node) {
  const stack = [node]
  while (stack.length > 0){
    const first = stack.shift()
    console.log(`first key: `, first.key)
    // 子节点压栈
    first.childen.slice().reverse().forEach(
      child => stack.unshift(child)
    )
  }
}

// // 递归具有天然`DFS`结构 程序语言使用栈实现递归
// function dfs(node) {
//   console.log(`node.key: `, node.key)
//   node.childen.forEach(dfs)
// }