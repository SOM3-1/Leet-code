# Middle node example
Let’s begin. I would like to start with 5 nodes(it’s our example for now).

We also create two variables which help us to iterate through all list. One variable is called slow and another one is fast and we point to the first node both of them. Why is like that ?

The reason is the ‘fast’ variable is going faster in two times than ‘slow’ one, because ‘slow’ will be on the half of the way of the ‘fast’ variable and it will be our middle of the list(‘slow’ will be in the middle of the list in the end of iterating).

ALWAYS ‘fast’ checking condition: “If the next two elements are not null”. If it’s null — stop iterating. If not null continue iterating.

In this case it will return ‘slow’ with {data: ‘red’}.

We created the function ‘midpoint’ . ‘slow’ and ‘fast’ points to first element in the list. While ‘fast’ element has data which is not null till that time we will iterate. And in the end return slow which points our middle element.

class Node {
  constructor(data, next = null) {
   this.data = data;
   this.next = next;
  }
}class LinkedList {
  constructor() {
    this.head = null;
  }insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }
  
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
     counter++;
     node = node.next;
    }
    return counter;
  }
  
  getFirst() {
    return this.head.data;
  }
  
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
     if (!node.next) {
      return node;
     }
     node = node.next;
    }
  }
  
  clear() {
    this.head = null;
  } 
  
  removeFirst() { 
    if (!this.head) {
     return;
    }
    this.head = this.head.next;
   }removeLast() {
    if (!this.head) {
      return;
    }
   
    if (!this.head.next) {
     this.head = null;
    }
   
    let previous = this.head;
    let node = this.head.next;
   
    while (node.next) {
      previous = node;
      node = node.next;
    }
    
    previous.next = null;
   }   insertLast(data) {
    const last = this.getLast();
    if (last) {
     last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
   }
  
   getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
     if (counter === index) {
      return node;
     }
     counter++;
     node = node.next;
    }
   return null;
  } removeAt(index) {
  if (!this.head) {
    return;
  }  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  
  const previous = this.getAt(index - 1);
  if (!previous || !previous.next) {
    return;
  }
  previous.next = previous.next.next;
 } insertAt(data, index) {
   if (!this.head) {
    this.head = new Node(data);
    return;
   }
   if (index === 0) {
    this.head = new Node(data, this.head);
    return;
   }
  const previous = this.getAt(index - 1) || this.getLast();
  const node = new Node(data, previous.next);
  previous.next = node; 
 }
}function midpoint(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast.next && fast.next.next) {
   slow = slow.next;
   fast = fast.next.next;
  }
  
  return slow;
 }const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");console.log(midpoint(l)); // returns {data: 'c'}
