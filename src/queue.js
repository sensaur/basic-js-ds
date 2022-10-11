const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(props) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  getUnderlyingList() {
    return this.first
  }

  enqueue(val) {
    let newNode = new ListNode(val)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (!this.first) return null
    const temp = this.first
    if (this.first === this.last) {
      return this.last === null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

module.exports = {
  Queue
};

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log({queue})
// queue.dequeue()
// console.log({queue})

