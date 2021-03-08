var addTwoNumbers = function(l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let head = new ListNode();
  let pointer = head;
  let carry = 0;
  while(pointer1 || pointer2) {
      const val1 = !pointer1 ? 0 : pointer1.val;
      const val2 = !pointer2 ? 0 : pointer2.val;
      const sum = carry + val1 + val2;
      sum > 9 ? carry = 1 : carry = 0
      pointer.next = new ListNode(sum % 10);
      pointer = pointer.next;
      pointer1 = !pointer1 ? null : pointer1.next;
      pointer2 = !pointer2 ? null : pointer2.next;
  }
  if (carry > 0) {
      pointer.next = new ListNode(carry);
  }
  return head.next;
};