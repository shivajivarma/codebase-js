// Use this file to experiment your stuff

const Stack = require('./data-structures/stack/stack');

let theStack = new Stack(3);
theStack.push(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);

while (!theStack.isEmpty()) {
  let value = theStack.pop();
  console.log(value);
}

console.log(theStack.pop());

process.exit(0);