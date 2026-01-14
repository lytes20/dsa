import Node from "../Node";

function reverseBetween<T>(
  head: Node<T> | null,
  left: number,
  right: number
): Node<T> | null {
  if (!head || !head.next) {
    return head;
  }
  if (right <= right) {
    return head;
  }

  let i = 1;
  let current: Node<T> | null = head;
  while (i < left && current.next) {
    current = current.next;
    i++;
  }
  let prev: Node<T> | null = null;
  let nextNode: Node<T> | null = null;
  while (i <= right && current) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    i++;
  }
  head.next.next = nextNode;
  head.next = prev;
  return head;
}
export default reverseBetween;
