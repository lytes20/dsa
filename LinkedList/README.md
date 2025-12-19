# Linked lists

## Types of linked lists

### Singly linked list

Most common type of a linked list.
Each node only has a pointer to the `next` node.

### Doubly linked list

A doubly linked list is like a singly linked list, but each node contains a pointer to the previous node.
This pointer is usually called `prev`.

### Linked lists with sentinel nodes

## Techniques on a linkedin list

### Dummy pointers

Use a dummy pointer that allows you to traverse the linked list without losing reference to the head.

```typescript
function getSum(head: Node): number {
  let ans = 0;
  let current = head;
  while (current) {
    ans = ans + current.value;
    current = current.next;
  }
  return ans;
}
```

### Fast and Slow pointers

```pseudo
function fn(head):
    slow = head
    fast = head

    while fast and fast.next
        // Do something here
        slow = slow.next;
        fast = fast.next.next
```
