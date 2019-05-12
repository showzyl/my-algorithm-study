/**
 * 广度优先搜索
 * @param node
 */

function bfs(node) {
  const queue = [node]
  while (queue.length > 0){
    const first = queue.shift()
    console.log(`first key: `, first.key)
    // 子节点压栈
    first.children.forEach(
      child => queue.push(child)
    )
  }
}


function Node(key) {
  this.children = []
  this.key = key
}

const n1 = new Node('1')
const n2 = new Node('2')
const n3 = new Node('3')
const n4 = new Node('4')
const n5 = new Node('5')
const n6 = new Node('6')


n1.children.push(n2)
n1.children.push(n5)
n2.children.push(n3)
n2.children.push(n4)
n5.children.push(n6)

console.log(`n1: `, JSON.stringify(n1))


bfs(n1)
