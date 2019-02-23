class Queue {
  constructor() {
    this.init()
  }

  init() {
    this.stores = []
  }

  // 入队
  enqueue(...item) {
    return this.stores.push(...item)
  }

  // 出队
  dequeue() {
    return this.stores.shift()
  }

  // 读取队首的元素
  front() {
    return this.stores[0];
  }

  // 读取队尾的元素
  end() {
    return this.stores[this.stores.length - 1];
  }

  // 清空
  clear() {
    this.init()
  }
}

let queue = new Queue()
console.log(`queue: `, queue)
queue.enqueue(1)
queue.enqueue(1, 2)
console.log(`queue: `, queue)
console.log(`queue: `, queue.dequeue())
console.log(`queue: `, queue)
console.log(`queue end: `, queue.end())

queue.clear()

// queue.clear()
console.log(`queue: `, queue)

