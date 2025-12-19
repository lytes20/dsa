class DoubleNode<T> {
  val: T;
  next: DoubleNode<T> | null;
  prev: DoubleNode<T> | null;
  constructor(value: T) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

export default DoubleNode;
