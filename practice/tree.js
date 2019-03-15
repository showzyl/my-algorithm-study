/**
 * 树的抽象
 * @param key
 * @constructor
 */
function Node(key) {
  this.key = key
  this.childen = []
}

const n1 = new Node('1')
const n2 = new Node('2')
const n3 = new Node('3')
const n4 = new Node('4')
const n5 = new Node('5')
const n6 = new Node('6')


n1.childen.push(n2)
n1.childen.push(n5)
n2.childen.push(n3)
n2.childen.push(n4)
n5.childen.push(n6)

console.log(`n1: `, JSON.stringify(n1))
















