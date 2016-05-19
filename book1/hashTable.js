/**
 * Created by showzyl on 16/5/19.
 */

'use strict'

/**
 *  list
 *  链表
 *
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }


}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

}


var cities = new LList();
console.log(cities)
cities.insert("Conway", "head");
console.log(cities)
cities.insert("Russellville", "Conway");
console.log(cities)
cities.insert("Alma", "Russellville");
console.log(cities)
cities.display()










