const { NotImplementedError } = require('../extensions/index.js');


class Stack {
 stack = [];
  
  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1]    
  }
}

module.exports = {
  Stack
};