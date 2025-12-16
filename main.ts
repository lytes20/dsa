import LinkedList from "./LinkedList";
import Node from "./Node";

let getSum = (head: Node<number> | null) => {
  let ans = 0;
  while (head) {
    ans += head.val;
    head = head.next;
  }
  return ans;
};

function main() {
  let head: Node<string> | null = new Node("Never more");
  // const myList: LinkedList = new LinkedList(head);
  // myList.add("two");
  // myList.add("three");
  // console.log("" + myList);

  let ptr = head; // When you assign a pointer to an existing linked list node, the pointer refers to the object in memory
  head = head.next;
  console.log("head", head);
  console.log("ptr", ptr);
}

main();
