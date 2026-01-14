import Node from "../Node";

function reverse<T>(head: Node<T> | null) {
  let current = head;
  let prev: Node<T> | null = null;
  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
export default reverse;
