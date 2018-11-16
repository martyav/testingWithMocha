class MyNode {
  constructor(value) {
    this.value = value;
    this.next;
  }

  removeNext() {
    this.next = null;
  }
}

module.exports = MyNode;