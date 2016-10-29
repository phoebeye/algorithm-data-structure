/*
Given a linked list, remove the nth node from the end of list and return its head.
For example,
   Given linked list: 1->2->3->4->5, and n = 2.
   After removing the second node from the end, the linked list becomes 1->2->3->5.
*/
//Time complexity: O(n)
const removeNthFromEnd = (head, n) => {
  let result = new ListNode(0);
  result.next = head;
  let first = result;
  let second = result;

  for(let i = 0; i <= n; i++){ //first pointer advances by n steps
      first = first.next;
  }
  //console.log(first,'first')
  while (first !== null){ // second pointer starts to move along with first pointer until the end of the link
    second = second.next;
    first = first.next;
  }
  if(second.next){
  	second.next = second.next.next; // if second.next !== null, then connect to the second.next.next;
  }
  return result.next;
};
