const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require("../extensions/list-node.js");


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const current = new ListNode(value);

    if (!this.head || !this.tail) {
      this.head = current;
      this.tail = current;
      return;
    }
    this.tail.next = current;
    this.tail = current;
  }

  dequeue() {
    if (this.length === 0) return;

    let current = this.head;
    this.head = current.next;
    this.length--;
    return current.value;
  }
}

module.exports = {
  Queue
};
