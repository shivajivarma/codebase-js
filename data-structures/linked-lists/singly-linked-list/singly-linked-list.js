const Node = require('../node/node.js');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /*  Function to check if list is empty  */
  isEmpty() {
    return this.head == null;
  }

  /*  Function to get size of list  */
  getSize() {
    return this.size;
  }

  /*  Function to insert an element at beginning  */
  insertAtStart(val) {
    let node = new Node(val, null);
    this.size++;
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.setLink(this.head);
      this.head = node;
    }
  }

  /*  Function to insert an element at tail  */
  insertAtEnd(val) {
    let node = new Node(val, null);
    this.size++;
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.setLink(node);
      this.tail = node;
    }
  }

  /*  Function to get an element at position  */
  getByPos(pos) {
    if (pos >= 0 && pos < this.size) {
      let ptr = this.head;
      for (let i = 0; i < pos; i++) {
        ptr = ptr.getLink();
      }
      return ptr.getData();
    }
    return null;
  }

  /*  Function to display elements  */
  /* istanbul ignore next*/
  display() {
    let output = 'Singly Linked List = ';
    let arr = this.toArray();
    if (arr.length === 0) {
      output += 'empty\n';
    } else {
      arr.forEach(function(data, index) {
        if (index)
          output += '->';
        output += data;
      });
    }
    console.log(output);
  }

  toArray() {
    let array = [];
    if (this.size === 0) {
      // do nothing
    } else if (this.head.getLink() == null) {
      array.push(this.head.getData());
    } else {
      array.push(this.head.getData());
      let ptr = this.head.getLink();
      while (ptr.getLink() != null) {
        array.push(ptr.getData());
        ptr = ptr.getLink();
      }
      array.push(ptr.getData());
    }
    return array;
  }

}

module.exports = SinglyLinkedList;
