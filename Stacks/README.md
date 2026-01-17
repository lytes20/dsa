# Stacks

A stack is an ordered collection where elements can only be added or removed from the same end.

You can think of a stack like this: I am *stuck* from accessing elements that are not on top. For example, imagine plates stacked one on top of the other. If you want to access a plate in the middle, you can’t just pull it out directly. You first have to lift off the plates on top, one by one, until you reach the plate you want. After that, you can put the plates back.

In other words, you *pop off* the top elements, pick the element you need, and then place the popped elements back on top. As you can see, a stack of plates is a very good example for understanding the Stack data structure.

## Constraint

**Last In, First Out (LIFO)**

For a data structure to be called a stack, it must follow the Last In, First Out principle.
This means the last item you inserted is the first item you can access and remove.

## Implementation

A stack is just an idea—a concept.
In practice, it can be implemented using an array (or other data structures), as long as the LIFO rule is respected.
