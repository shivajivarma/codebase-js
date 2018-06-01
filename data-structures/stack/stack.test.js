const {assert} = require('chai');
const Stack = require('./stack');

let theStack;

describe('stack', () => {

  it('stack should initialize properly', () => {
    let stack = new Stack(3);
    assert.isTrue(stack.isEmpty());
    assert.isFalse(stack.isFull());
  });

  it('stack push should insert into array', () => {
    theStack = new Stack(3);
    theStack.push(10);
    theStack.push(20);
    assert.isTrue(theStack.push(30));
    assert.isFalse(theStack.push(40));
  });

  it('stack pop should pull last item from array', () => {
    assert.isTrue(theStack.isFull());
    assert.equal(theStack.pop(), 30);
    assert.equal(theStack.pop(), 20);
    assert.equal(theStack.pop(), 10);
    assert.equal(theStack.pop(), undefined);
  });

  it('stack peek should return top element of the stack', () => {
    theStack.push(20);
    assert.equal(theStack.peek(), 20);
    theStack.pop();
    assert.equal(theStack.peek(), undefined);
  });

});
