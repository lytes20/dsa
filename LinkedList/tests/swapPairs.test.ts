import Node from "../Node";
import swapPairs from "../utils/swapPairs";

function createLinkedList<T>(arr) {
  const head = new Node<T>(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node<T>(arr[i]);
    current = current.next;
  }
  return head;
}
describe("Test Swap Pairs", () => {
  test("Swap pairs in ", () => {
    const original = createLinkedList([1, 2, 3, 4]);
    const result = createLinkedList([2, 1, 4, 3]);
    expect(swapPairs(original)).toEqual(result);
  });
});
