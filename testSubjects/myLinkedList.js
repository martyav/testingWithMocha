let MyNode = require('./myNode.js');

class MyLinkedList {
  constructor(node) {
    this.head = node;
  }

  push(value) {
    let current = this.head;

    while (current.next) current = current.next;

    current.next = new MyNode(value);
  }

  pop() {
    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    
    previous.next = null;
    
    return current;
  }

  peek() {
    let current = this.head;

    while (current.next) current = current.next;
    
    return current;
  }

  contains(value) {
    let current = this.head;

    while (current.next) {
      if (value === current.value) return true; 

      current = current.next
    }

    return value === current.value;
  }

  find(value) {
    let current = this.head;
    let found;

    while (current.next) {
      if (value === current.value) found = current; 

      current = current.next
    }

    if (value === current.value) found = current;
    
    return found;
  }

  remove(value) {
    if (this.head.value === value) this.head = this.head.next;

    let current = this.head;
    let previous;

    while (current.next) {
      if (value === current.value) previous.next = current.next; 

      previous = current;
      current = current.next;
    }
  }

  removeAll() {
    // a better way is go to the end, then delete each node backward from the tail 
    this.head = null;
  }
}

module.exports = MyLinkedList;