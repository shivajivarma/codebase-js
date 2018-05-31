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

    /*  Function to display elements  */
    display() {
        var output = "Singly Linked List = ";
        if (this.size === 0) {
            output += "empty\n";
        } else if (this.head.getLink() == null) {
            output += this.head.getData();
        } else {
            let ptr = this.head;
            output += this.head.getData() + "->";
            ptr = this.head.getLink();
            while (ptr.getLink() != null) {
                output += ptr.getData() + "->";
                ptr = ptr.getLink();
            }
            output += ptr.getData();
        }
        console.log(output);
    }
    
}

module.exports = SinglyLinkedList;
