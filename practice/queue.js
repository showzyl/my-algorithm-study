class Queue {
  constructor(max = 100) {
    this.data = Array(max)
    this.p = 0
    this.q = 0
    this.size = 0
    this.max = max
  }

  enqueue(item) {
    if (this.size === this.max) {
      throw 'Queue Overflow'
    }
    this.data[this.p++] = item
    this.size++
    if (this.p === this.max) {
      this.p = 0
    }
  }

  dequeue() {
    if (this.size === 0) {
      throw 'Queue Underflow'
    }
    const item = this.data[this.q++]
    this.size--
    if (this.q === this.max) {
      this.q = 0
    }
    return item
  }

}


let queue = new Queue()
queue.enqueue(1)
queue.enqueue(4)
queue.enqueue(6)
console.log(`queue: `, queue)
queue.dequeue()
console.log(`queue: `, queue)
queue.enqueue(5)
console.log(`queue: `, queue)
queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(`queue: `, queue)
















