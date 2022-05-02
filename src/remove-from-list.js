const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(l, k) {
  let arr = []
  let node = l
  while(node != null) {
    if (node.value!=k) arr.push(node.value)
    node = node.next
  }
  return arr.reverse().reduce((acc, e) => {
    if (acc) {
      const node = new ListNode(e);
      node.next = acc;
      return node;
    }

    return new ListNode(e);
  }, null)
}

module.exports = {
  removeKFromList
};
