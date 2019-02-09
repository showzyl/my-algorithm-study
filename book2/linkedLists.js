'use strict';

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    var node = new Node(element),
      current;
    if (this.head === null) { //first node on list
      this.head = node;
    } else {
      current = this.head;
      //loop the list until find last item
      while (current.next) {
        current = current.next;
      }
      //get last item and assign next to added item to make the link
      current.next = node;
    }
    //console.log(this.head);
    this.length++; //update size of list
  }

  toString() {
    let current = this.head,
      string = '';

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  }

  print() {
    console.log(this.toString());
    //console.log(this.head, this.length);
  }
}

let link = new LinkedList();
link.append('123');
link.append('hehe');
link.print();
