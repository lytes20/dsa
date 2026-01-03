class Node<T> {
  public val: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.val = value;
    this.next = null;
  }

  toString(): string {
    return "" + this.val + "->" + this.next;
  }
}

export default Node;
