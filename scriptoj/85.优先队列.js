// http://scriptoj.mangojuice.top/problems/85

// 优先队列是一种元素带权重的队列，你可以往队列中添加和删除元素，但是删除元素的时候会把优先级最高的元素删除。例如：
//
// const pq = new PriorityQueue()
// pq.add(1)
// pq.add(2)
// pq.add(3)
//
// pq.remove() // => 3
// pq.remove() // => 2
// pq.remove() // => 1
// remove 方法每次删除的时候都会把最大的元素删除掉，并且返回被删除元素。请你完成 PriorityQueue 的实现。
//
// 服务器运行时间限制：20ms。

"use strict"


class PriorityQueue {
  constructor(){
    this.queue = []
    this.isSorted = false
  }

  add (item) {
    this.isSorted = false
    this.queue.push(item)
  }

  remove () {
    if(!this.isSorted){
      this.queue.sort((a, b) => a - b)
      this.isSorted = true
    }
    return this.queue.pop()
  }
}

const pq = new PriorityQueue()
pq.add(1)
pq.add(2)
pq.add(3)

console.log(`res1: `, pq.remove()) // => 3
console.log(`res2: `, pq.remove()) // => 2
console.log(`res3: `, pq.remove()) // => 1















