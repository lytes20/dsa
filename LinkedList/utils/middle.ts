import Node from "../Node";
function getMiddleNode<T>(head: Node<T> | null) {
  if (!head || !head.next) {
    return head;
  }
  let slow: Node<T> | null = head;
  let fast: Node<T> | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

export default getMiddleNode;
