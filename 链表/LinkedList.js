class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(equalsFn = (a, b) => a === b) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return false;
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element == element) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
    return false;
  }
  size() {
    return this.count;
  }
  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      if (position == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(position - 1);
        node.next = previous.next;
        previous.next = node;
      }
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      if (index == 0) {
        this.head = this.head.next;
      } else {
        let previous = this.getElementAt(index - 1);
        previous.next = previous.next.next;
      }
      this.count--;
    }
    return false;
  }
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + "+";
      current = current.next;
    }
    return str;
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
// const el = list.getElementAt(0);
console.log(list.toString(), list.size());
list.remove(3);
list.insert(100, 5);
console.log(list.toString(), list.size());
