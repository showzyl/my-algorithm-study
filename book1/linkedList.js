/**
 * Created by showzyl on 16/5/19.
 */

'use strict'

/**
 *  heap
 *  队列(栈)是一种先进先出(First-In-First-Out,FIFO)的数据结构
 *
 */

class Heap {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    return this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  empty() {
    if (this.dataStore.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
}


var q = new Heap();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());









