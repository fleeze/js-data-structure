// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL
// 示例 2:

// 输入: 2->1->3->5->6->4->7->NULL 
// 输出: 2->3->6->7->1->5->4->NULL

// 用两个指针分别指向奇偶的头部，重新链接后再接在一起
var oddEvenList = function (head) {
  if (head) {
    let odd = head
    let a = even = head.next
    while (odd.next && even.next) {
      odd.next = even.next
      odd = odd.next
      even.next = odd.next
      even = even.next
    }
    odd.next = a
  }
  return head
};