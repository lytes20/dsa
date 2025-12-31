import reverseArray from "./Arrays";
import Node from "./LinkedList/Node";
import getMiddleNode from "./LinkedList/utils/middle";

let getSum = (head: Node<number> | null) => {
  let ans = 0;
  while (head) {
    ans += head.val;
    head = head.next;
  }
  return ans;
};

// function main() {
//   const nodesArray = [1, 2, 3, 4, 5];
//   const head = new Node<number>(nodesArray[0]);
//   let current = head;
//   for (let i = 1; i < nodesArray.length; i++) {
//     current.next = new Node<number>(nodesArray[i]);
//     current = current.next;
//   }
//   console.log("" + head);
//   console.log(getMiddleNode(head));
// }

// main();

function main() {
  const arr = [5, 7, 2, 9, 1, 3, 10];
  const ans = reverseArray(arr);
  console.log(ans);
}

main();
