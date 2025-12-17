import Node from "../Node";

function getSumRecursively<T>(head: Node<T> | null) {
  if (!head) {
    return 0;
  }
  return head.val + getSumRecursively(head.next);
}

function getSum(head: Node<number> | null): number {
  let ans = 0;
  while (head) {
    ans = ans + head.val;
    head = head.next;
  }
  return ans;
}
