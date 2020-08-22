class Node{
  constructor(data){
    this.head = data
    this.tail = null
  }
}

class LinkedList{
  constructor(){
    this.headNode = null
  }

  addingNode(node, data){
    if(node.tail === null){
      node.tail = new Node(data)
    }
    else if(node.tail !== null){
      return this.addingNode(node.tail, data)
    }
  }

  newNode(data){
    if(this.headNode === null){
      this.headNode = new Node(data)
      return
    }else if(this.headNode !== null){
      return this.addingNode(this.headNode, data)
    }
  }

  numbers(node){
    if(node.tail === null){
      console.log(node.head)
    }else{
      console.log(node.head)
      this.numbers(node.tail)
    }
  }

  nodeNumbers(){
    if(this.headNode.tail === null){
      return this.headNode.head
    }else{
      return this.numbers(this.headNode.tail)
    }
  }

  searchNode(ele, list){
    if(list === null){
      return false
    }
    else if(list.head === ele){
      return true
    }
    else if(list.head !== ele){
      return this.searchNode(ele, list.tail)
    }
    else{
      return false
    }
  }

  Search(ele){
    if(this.headNode.head === ele){
      return true
    }else{
      return this.searchNode(ele, this.headNode.tail)
    }
  }

  Display(){
    return this.headNode
  }

  lengthNode(node, count){
    if(node.tail === null){
      console.log(count++)
    }
    else if(node.tail !== null){
      count++
      this.lengthNode(node.tail, count)
    }
  }

  length(){
    if(this.headNode.tail === null){
      console.log(1)
    }else{
      let count = 1
      return this.lengthNode(this.headNode, count)
    }
  }

  Minimum(){
    let node = this.headNode
    let min = this.headNode.head
      while(node!==null){
        if(node.head < min){
          min = node.head
        }else{
          node = node.tail
        }
      }
    return min
  }

  Maximum(){
    let max = this.headNode.head
    let node = this.headNode
      while(node!==null){
        if(node.head > max){
          max = node.head
        }else{
          node = node.tail
        }
      }
      return max
    }

    Reversing(){
      let node,previous,tmp
      node = previous = tmp = this.headNode

      while (node) {
        tmp = node.tail

        node.tail = previous

        previous = node
        node = tmp
      }
      return previous
        }
}

const ob = new LinkedList()
ob.newNode(6)
ob.newNode(2)
ob.newNode(3)
ob.newNode(4)
ob.newNode(20)
ob.newNode(1)
ob.newNode(9)
ob.newNode(15)
console.log(ob.Display())
ob.nodeNumbers()
console.log(ob.Search('and'))
ob.length()
console.log('Minimum :'+ob.Minimum())
console.log('Maximum :'+ob.Maximum())
console.log(ob.Reversing())
