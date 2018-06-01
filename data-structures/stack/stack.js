class Stack {

  /*
   * @param: size is optional field
   */
  constructor(size) {
    this.maxSize = size;
    this.stackArray = [];
    this.top = -1;
  }

  push(j) {
    if (this.isFull()) {
      console.log('Stack Overflow');
      return false;
    } else {
      this.stackArray[++this.top] = j;
      return true;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack Underflow');
      return undefined;
    }
    else {
      return this.stackArray[this.top--];
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Empty Stack');
      return undefined;
    }
    else {
      return this.stackArray[this.top];
    }
  }

  isEmpty() {
    return (this.top === -1);
  }

  isFull() {
    return (this.top === this.maxSize - 1);
  }

}

module.exports = Stack;
