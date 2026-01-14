import Node from "./Node";

class LinkedList<T> {
  head: Node<T> | null;

  constructor(head: Node<T>) {
    this.head = head;
  }

  add(value: T): boolean {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return true;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
    return true;
  }

  addNode(prevNode: Node<T>, newNode: Node<T>) {
    if (!newNode) {
      throw new Error("Please enter a valid node");
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  remove(value: T): boolean {
    if (this.head === null) {
      console.log("List is empty");
      return false;
    }
    if (this.head.val === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next != null) {
      if ((current.next.val = value)) {
        current.next == current.next.next;
        return true;
      }
      current = current.next;
    }
    console.log(`${value} not found`);
    return false;
  }

  toString(): string {
    let stringValue = "My list: ";
    if (this.head == null) {
      return stringValue;
    }
    let current: Node<T> | null = this.head;
    while (current != null) {
      stringValue = stringValue + current.val;
      if (current.next != null) {
        stringValue = stringValue + "-->";
      }
      current = current.next;
    }
    return stringValue;
  }
}

export default LinkedList;
