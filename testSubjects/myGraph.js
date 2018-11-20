class MyGraph {
  // we are going to ignore the next on our nodes, for simplicity, and instead use an adjacency list
  // our adjacency list will use the values
  constructor(node) {
    this.adjacencies = new Map(node.value, []);
  }

  addAdjacency(node, connectTo) {
    this.adjacencies[connectTo].push(node.value);
    this.adjacencies[node.value].push(connectTo);
  }

  removeAdjacency(node, connectTo) {
    let connectList = this.adjacencies[connectTo];
    let nodeList = this.adjacencies[node.value];

    for (let i = 0; i < connectList.length; i++) {
      if (connectList[i] === node.value) {
        if (i > connectList.length - 2) {
          list = connectList.slice(0, i);
        } else {
          list = connectList.slice(0, i) + connectList.slice(i + 1)
        }
      }
    }

    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i] === connectTo) {
        if (i > nodeList.length - 2) {
          list = nodeList.slice(0, i);
        } else {
          list = nodeList.slice(0, i) + nodeList.slice(i + 1)
        }
      }
    }
  }
}

module.exports = MyNode;