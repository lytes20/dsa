import DoubleNode from "./DoubleNode";

class DoublyLinkedList<T> {
  head: DoubleNode<T> | null;

  constructor(head: DoubleNode<T>) {
    this.head = head;
  }
}

export default DoublyLinkedList;
