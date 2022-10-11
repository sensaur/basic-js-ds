const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      let current = this.rootNode;
      console.log(current)
      while (true) {
        if (data > current.data) {
          if (current.right === null) {
            current.right = new Node(data);
            break;
          } else {
            current = current.right;
          }
        } else if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data);
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  has(data) {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    const rnLoop = true;
    while (rnLoop) {
      if (!current) return false;
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    const rnLoop = true;
    while (rnLoop) {
      if (!current) return null;
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove(val, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (val < node.data) {
      node.left = this.remove(val, node.left);
    } else if (val > node.data) {
      node.right = this.remove(val, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }

  min(node = this.rootNode) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max(node = this.rootNode) {
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
//
// console.log(tree.has(9))
// console.log(JSON.stringify(tree))
