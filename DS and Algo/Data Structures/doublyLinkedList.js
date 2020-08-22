class Node{
  constructor(data){
    this.previous = null
    this.head = data
    this.next = null
  }
}

class DoubleLinkedList{
  constructor(){
    this.root = null
  }

  Display(){
    return this.root
  }

  addNode(data){
    this.root = new Node(data);

    const secondNode = new Node(data);
    this.root.next = secondNode;
    secondNode.previous = this.root;

    const thirdNode = new Node(data);
    secondNode.next = thirdNode;
    thirdNode.previous = secondNode;

    const tail = thirdNode;
      }

}

const ob = new DoubleLinkedList()
ob.addNode(12)
ob.addNode(13)
ob.addNode(15)
console.log(ob.Display())
