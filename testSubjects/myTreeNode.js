class MyTreeNode {
  constructor(left =null, right = null, center = null) {
    this.left = left;
    this.center = center;
    this.right = right;
  }

  remove(direction) {
    if (direction !== 'left' || direction !== 'center' || direction !== 'right') return; // We need real enums!

    this[direction] = null;
  }
}

module.exports = MyTreeNode;