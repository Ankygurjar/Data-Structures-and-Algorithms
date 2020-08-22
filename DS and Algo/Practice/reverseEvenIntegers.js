class Node{
  constructor(data){
    this.head = data
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.root = null
  }

  Display(){
    let displayNode = this.root
    while(displayNode !== null){
      console.log(displayNode.head)
      displayNode = displayNode.next
    }
    console.log("\n")
  }

  checkEven(ele){
    if((ele % 2) === 0){
      return true
    }else
       return false
  }

  recursiveEvenEle(list){
    if(list.next !== null){
      if((this.checkEven(list.head)) === true && (this.checkEven(list.next.head)) === true){
        let newNode = list.next.head
        list.next.head = list.head
        list.head = newNode
         this.recursiveEvenEle(list.next)
      }else{

         this.recursiveEvenEle(list.next)
      }
    }
  }

  reverseEvenEle(){
    /*if((this.checkEven(this.root.head))=== true && (this.checkEven(this.root.next.head))===true){
      let newNode = this.root.next.head
      this.root.next.head = this.root.head
      this.root.head = newNode
    }else{*/
      return this.recursiveEvenEle(this.root)
    }

  recursiveAddNode(list, data){
    if(list.next === null){
      list.next = new Node(data)
    }else{
      return this.recursiveAddNode(list.next, data)
    }
  }

  addNode(data){
    if(this.root === null){
      this.root = new Node(data)
      return
    }else{
      return this.recursiveAddNode(this.root, data)
    }
  }


}

const ob = new LinkedList()
ob.addNode(2)
ob.addNode(18)
ob.addNode(24)
ob.addNode(3)
ob.addNode(5)
ob.addNode(7)
ob.addNode(9)
ob.addNode(6)
ob.addNode(12)
ob.Display()
ob.reverseEvenEle()
ob.Display()
