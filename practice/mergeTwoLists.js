class LinkedList {
  constructor(val) {
    this.head = null
    this.length = 0
  }

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

  findPos(index) {
    let current = this.head
    // console.log(`current: `, current)
    if (current === null) {
      throw new Error(`This LinkedList is empty!`)
    } else {
      let i = 0
      while (current) {
        if (i === index) {
          return current.val
        }
        current = current.next
        i++
      }
    }
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

}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];
let list1 = new LinkedList();
let list2 = new LinkedList();

arr1.forEach(function (key) {
  list1.append(key);
})

arr2.forEach(function (key) {
  list2.append(key);
})


function mergeTwoLists(l1, l2) {
  let i = 0, j = 0, k = 0
  let resLinkedList = new LinkedList()

  while (i < l1.length && j < l2.length) {
    if (l1.findPos(i) < l2.findPos(j)) {
      // tmp[k++] = l1.findPos(i++)
      resLinkedList.append(l1.findPos(i++))
    } else {
      // tmp[k++] = l2.findPos(j++)
      resLinkedList.append(l2.findPos(j++))
    }
    // tmp[k++] =
  }
  while (i < l1.length){
    resLinkedList.append(l1.findPos(i++))
  }
  while (j < l2.length){
    resLinkedList.append(l2.findPos(j++))
  }

  console.log(`resLinkedList: `, JSON.stringify(resLinkedList))
  return resLinkedList
}


console.log(`res: `, JSON.stringify(mergeTwoLists(list1, list2)))
console.log(`list1: `, JSON.stringify(list1))
console.log(`list2: `, JSON.stringify(list2))
