// Brute force
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {number}
//  */
// var pairSum = function (head) {
//   let size = 0;

//   let current = head;
//   while (current) {
//     size++;
//     current = current.next;
//   }

//   let i = 0;
//   let maxSum = 0;
//   let temp = head;
//   while (temp) {
//     const twinPosition = size - 1 - i;
//     let currentTwo = head;
//     let j = 1;
//     while (j <= twinPosition) {
//       j++;
//       currentTwo = currentTwo.next;
//     }
//     const sum = temp.val + currentTwo.val;
//     maxSum = Math.max(sum, maxSum);
//     temp = temp.next;
//     i++;
//   }

//   return maxSum;
// };

var pairSum = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let nextNode = null;
  let prev = null;
  while (slow) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let maxSum = 0;
  let start = head;
  while (prev != null) {
    maxSum = Math.max(maxSum, start.value + prev.value);
    prev = prev.next;
    start = start.next;
  }
  return maxSum;
};
