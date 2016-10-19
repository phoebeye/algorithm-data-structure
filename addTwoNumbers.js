// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

//time complexity: 0(N), depends on the length of the LinkNode
const addTwoNumbers = (l1, l2) => {
  let addition = 0;
  let head = new ListNode(null);
  while (l1 !== null || l2 !== null) { // ListNode length might not be the same
    let sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + addition; // let node.val equal to 0 if it's null
    let digit = sum % 10;
    addition = sum >= 10 ? 1 : 0; //carry larger than 10 vale to the next node
    if (head.val === null) {
      head.val = digit;
      tail = head;
    } else {
      tail.next = new ListNode(digit);
      tail = tail.next;
    }
    l1 = l1 === null ? l1 : l1.next;
    l2 = l2 === null ? l2 : l2.next;
  }
  if (addition !== 0) {
    tail.next = new ListNode(1);
  }
  return head;
};