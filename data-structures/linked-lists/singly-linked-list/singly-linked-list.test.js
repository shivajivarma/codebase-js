const {assert} = require('chai');
const SinglyLinkedList = require('./singly-linked-list');

describe('singly linked list', () => {
  
  it('singly linked list should initialize properly', () => {
    let list = new SinglyLinkedList();
    assert.equal(list.getSize(), 0);
  });

  it('insert at the start of linked list', () => {
    let list = new SinglyLinkedList();
    list.insertAtStart(12);
    assert.equal(list.getSize(), 1);
  });

  
});
