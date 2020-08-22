class Node{
  constructor(data, right=null, left=null){
    this.data = data
    this.right = right
    this.left = left
  }
}

class TraverseTree{
  constructor(){
    this.root = null
  }
  Display(){
    return this.root
  }
  addNode(data){
    let node = this.root
    if(this.root === null){
      this.root = new Node(data)
    }else{
      return this.addNewNode(node, data)
    }
  }

  addNewNode(node, data){
    if(data < node.data){
      if(node.left === null){
        node.left = new Node(data)
        return
      }
      else if(node.left !== null){
        return this.addNewNode(node.left, data)
      }
    }
    else if(data > node.data){
      if(node.right === null){
        node.right = new Node(data)
        return
      }else if(node.right !== null){
        return this.addNewNode(node.right, data)
      }
    }
  }

  inOrderTraverseTree(node){

    if(node !== null){
      this.inOrderTraverseTree(node.left)
      console.log(node.data)
      this.inOrderTraverseTree(node.right);
    }
  }

  inOrderTraversing(){
    let showData = this.root
    if(showData.left === null){
      return showData.data
    }else if(showData.left!==null) {
      return this.inOrderTraverseTree(showData)
    }
  }

  preOrderTraverseTree(node){
    if(node !== null){
      console.log(node.data)
      this.preOrderTraverseTree(node.left)
      this.preOrderTraverseTree(node.right)
    }
  }

  preOrderTraversing(){
    let showData = this.root
    if(showData.left === null){
      return showData.data
    }else if(showData.left !== null){
      return this.preOrderTraverseTree(showData)
    }
  }

  postOrderTraverseTree(node){
    if(node !== null){
      this.postOrderTraverseTree(node.left)
      this.postOrderTraverseTree(node.right)
      console.log(node.data)
    }
  }

  postOrderTraversing(){
    let showData = this.root
    if(showData.left === null){
      return showData.data
    }else if(showData.left !== null){
      return this.postOrderTraverseTree(showData)
    }
  }
}

const ob = new TraverseTree()
ob.addNode(12)
ob.addNode(10)
ob.addNode(13)
ob.addNode(2)
ob.addNode(9)
ob.addNode(11)
ob.addNode(14)
ob.addNode(6)
//console.log(ob.Display())
//ob.inOrderTraversing()
//ob.preOrderTraversing()
ob.postOrderTraversing()
