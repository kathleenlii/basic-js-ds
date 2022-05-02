const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    
    this.treeRoot = null;
  }
  

  root() {
    return this.treeRoot;
  }

 
    add(data) {
      this.treeRoot = addNode(this.treeRoot, data);
  
      function addNode(node, data) {
        if (!node) {
          return new Node(data);
        } else if (data === node.data) {
          return node;
        } else if (data < node.data) {
          node.left = addNode(node.left, data);
        } else {
          node.right = addNode(node.right, data);
        }
  
        return node;
      }
    }
  
    root() {
      return this.treeRoot;
    }
  
    has(data) {
      return searchNode(this.treeRoot, data);
  
      function searchNode(node, data) {
        if (!node) {
          return false;
        } else if (data === node.data) {
          return true;
        } else if (data < node.data) {
          return searchNode(node.left, data);
        } else {
          return searchNode(node.right, data);
        }
      }
    }
  
    find(data) {
      return searchNode(this.treeRoot, data);
  
      function searchNode(node, data) {
        if (!node) {
          return null;
        } else if (data === node.data) {
          return node;
        } else if (data < node.data) {
          return searchNode(node.left, data);
        } else {
          return searchNode(node.right, data);
        }
      }
    }
  
    remove(data) {
      this.treeRoot = removeNode(this.treeRoot, data);
  
      function removeNode(node, data) {
        if (!node) {
          return null;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
  
          if (!node.left) {
            node = node.right;
            return node;
          }
  
          if (!node.right) {
            node = node.left;
            return node;
          }
  
          let maxFromLeft = node.left;
  
          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }
  
          node.data = maxFromLeft.data;
  
          node.left = removeNode(node.left, maxFromLeft.data);
  
          return node;
        }
      }
    }
  
    min() {
      if (!this.treeRoot) {
        return;
      }
  
      let minNode = this.treeRoot;
      while (minNode.left) {
        minNode = minNode.left;
      }
  
      return minNode.data;
    }
  
    max() {
      if (!this.treeRoot) {
        return;
      }
  
      let maxNode = this.treeRoot;
      while (maxNode.right) {
        maxNode = maxNode.right;
      }
  
      return maxNode.data;
    }
  }


module.exports = {
  BinarySearchTree
};