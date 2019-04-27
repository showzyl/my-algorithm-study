class Stack {
  constructor() {
    this.init()
  }

  init() {
    this.top = 0
    this.stores = []
  }

  // 入栈
  push(...item) {
    this.top++
    return this.stores.push(...item)
  }

  // 出栈
  pop() {
    this.top--
    return this.stores.pop()
  }

  // 返回栈顶元素
  peek() {
    return this.stores[this.top - 1]
  }

  // 清空
  clear() {
    this.init()
  }
}

let stack = new Stack()
console.log(`stack: `, stack)

stack.push(1, 2)
// stack.push(3)
// stack.push(4)

console.log(`stack: `, stack)
console.log(`stack: `, stack.peek())
console.log(`stack: `, stack)
stack.pop()
// stack.clear()
console.log(`stack: `, stack)

