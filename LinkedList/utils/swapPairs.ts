import Node from "../Node";

function swapPairs<T>(head: Node<T> | null): Node<T> | null {
  if (!head || !head.next) {
    return head;
  }

  let dummy = head.next;
  let current: Node<T> | null = head;
  let prev: Node<T> | null = null;
  while (current && current.next) {
    if (prev) {
      prev.next = current.next; // Step 4
    }
    prev = current;
    const nextNode = current.next.next;
    current.next.next = current;
    current.next = nextNode;
    current = nextNode;
  }
  return dummy;
}

export default swapPairs;
