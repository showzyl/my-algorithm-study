class Node {
  constructor(val) {
    Object.assign(this, {
      val,
      next: null
    })
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  // 插入元素
  append(item) {
    let node = new Node(item)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
    return this
  }

  // 查找元素的`索引`
  indexOf(val) {
    let current = this.head
    let index = 0
    while (current) {
      if (val === current.val) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  // 在任意位置插入一个元素
  insert(pos, val) {
    // 处理边界
    if (pos < 0 || pos > this.length) return false
    let node = new Node(val)
    let current = this.head
    let index = 0

    if (pos === 0) {
      this.head = node
      if (current) node.next = current
    } else {
      let pre
      while (index++ < pos) {
        pre = current
        current = current.next
      }
      node.next = current
      pre.next = node
    }
    this.length++
    return true
  }

  // 根据索引删除元素
  removeAt(pos) {
    // console.log(`pos: `, pos)
    let current = this.head
    let index = 0
    let prev

    // 处理边界
    if (pos < 0) pos = 0
    if (pos >= this.length) pos = this.length

    if (pos === 0) {
      this.head = current.next
    } else {
      while (index++ < pos) {
        prev = current
        current = current.next
      }
      prev.next = current.next
    }

    this.length--
    return this
  }

  // 删除元素
  remove(val) {
    let index = this.indexOf(val)
    this.removeAt(index)
    return this
  }

  findPos(index) {
    let current = this.head
    console.log(`current: `, current)
    if (current === null) {
      throw new Error(`This LinkedList is empty!`)
    } else {
      let i = 0
      while (current){
        if(i === index){
          return current.val
        }
        current = current.next
        i++
      }
    }
  }

}


let linkedList = new LinkedList()
// linkedList.append(1)
console.log(`linkedList: `, JSON.stringify(linkedList.append(1)))
console.log(`linkedList: `, JSON.stringify(linkedList.append(2)))
console.log(`linkedList: `, JSON.stringify(linkedList.append(3)))
// console.log(`linkedList: `, linkedList.append(3))
// linkedList.append(2)
// linkedList.append(3)
console.log(`linkedList: `, JSON.stringify(linkedList))
console.log(`linkedList.indexOf(3): `, linkedList.indexOf(3))
console.log(`findPos(index): `, linkedList.findPos(2))

// console.log(`linkedList: `, JSON.stringify(linkedList.insert(-100, 'lizi')))
// console.log(`linkedList: `, JSON.stringify(linkedList.removeAt(1)))
// console.log(`linkedList: `, JSON.stringify(linkedList.remove(1)))


// export default LinkedList

module.exports = LinkedList

