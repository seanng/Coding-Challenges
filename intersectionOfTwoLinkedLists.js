/* jshint esversion: 6 */

/*
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.



Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }

 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const checkLength = (node, counter=0) => {
  counter++;
  if (node.next !== null) {
    let nextNode = node.next;
    return checkLength(nextNode, counter);
  }
  return counter;
};

var getIntersectionNode = function(headA, headB) {
  // initialize 2 counters. one for headA and another for headB.
  headA.length = checkLength(headA);
  headB.length = checkLength(headB);
  let longer, shorter, offset, start;
  if (headA.length >= headB.length) {
    longer = headA;
    shorter = headB;
    offset = headA.length - headB.length;
  } else {
    longer = headB;
    shorter = headA;
    offset = headB.length - headA.length;
  }
  for (let i = 0; i < offset; i++) {
    longer = longer.next;
  }

  for (let i = 0; i < shorter.length; i++) {
    if (longer == shorter) {
      return longer;
    }
    let temp = shorter;
    longer = longer.next;
    shorter = shorter.next;
    shorter.length = temp.length - 1;
  }
  return null;
};

let newList = new ListNode(1);
let newList2 = new ListNode(2);
newList.next = new ListNode(5);
newList.next.next = new ListNode(10);
let newList3 = new ListNode(3);
newList.next.next.next = newList3;
newList2.next = newList3;
newList3.next = new ListNode(11);
newList3.next.next = new ListNode(12);
let newList4 = new ListNode(4);
newList4.next = newList;

console.log('got it', getIntersectionNode(newList4, newList2))