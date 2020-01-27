function josephus(total, num) {
  class Node {
    constructor(num) {
      this.num = num;
      this.next = null;
    }
  }

  const head = new Node(1);
  let prevNode = head;
  for (let i = 1; i < total; i++) {
    const nextNode = new Node(i + 1);
    prevNode.next = nextNode;
    prevNode = nextNode;
  }
  prevNode.next = head;

  let current = head;
  let previous = null;
  let countNum = 1;
  while (current.next !== current) {
    if (countNum !== num) {
      previous = current;
      current = current.next;
      countNum += 1;
    } else {
      previous.next = current.next;
      current.next = null;
      current = previous.next;
      countNum = 1;
    }
  }
  console.log(current.num);
}

josephus(41, 3);