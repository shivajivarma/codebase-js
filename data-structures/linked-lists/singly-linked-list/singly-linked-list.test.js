const {assert} = require('chai');
const SinglyLinkedList = require('./singly-linked-list');

describe('singly linked list', () => {
  
  it('singly linked list should initialize properly', () => {
    let list = new SinglyLinkedList();
    assert.isTrue(list.isEmpty());
    let arr = list.toArray();
    assert.equal(arr.length, 0);
  });

  it('insert at the start of linked list', () => {
    let list = new SinglyLinkedList();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtStart(99);
    assert.equal(list.getSize(), 3);

    let arr = list.toArray();
    assert.equal(arr[0], 99);
  });

  it('insert at the end of linked list', () => {
    let list = new SinglyLinkedList();
    list.insertAtEnd(1);
    list.insertAtStart(99);
    list.insertAtEnd(2);

    let arr = list.toArray();
    assert.equal(list.getSize(), 3);
    assert.equal(arr[2], 2);
  });

  it('get value at position', () => {
    let list = new SinglyLinkedList();
    list.insertAtStart(99);
    list.insertAtEnd(1);
    list.insertAtEnd(2);

    assert.equal(list.getByPos(0), 99);
    assert.equal(list.getByPos(2), 2);
    assert.equal(list.getByPos(5), null);
  });

});
