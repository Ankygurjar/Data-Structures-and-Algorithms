 /*
    // Node class is to create a node For Tree
    // BT class is for Creating a Tree
    // addNode() Function to add a node in Tree
    // Min() Function to return the smallest element of the Tree
    // Biggest() Function to return the Biggest element of the Tree
    // Display() Function to Display the element of the Tree

 */


class Node{
  constructor(data, left = null, right = null){
    this.data = data
    this.right = left
    this.left = right
  }
}

class BT{
  constructor(){
    this.root = null
  }

  addNode(data){
    let node = this.root
    if(this.root === null){
      this.root = new Node(data)
      return
    }else{
      this.Tree(node, data)
    }
  }

  Tree(node, data){
    if(data > node.data){
      if(node.right === null){
        node.right = new Node(data)
        return
      }else if(node.right !== null){
        return this.Tree(node.right, data)
      }
    }
    else if(data < node.data){
      if(node.left === null){
        node.left = new Node(data)
      }else if(node.left !== null){
        return this.Tree(node.left, data)
      }
    }
  }

  Display(){
    console.log(this.root)
  }

  Min(){
    let nodes = this.root
    return this.showSmallNodeData(nodes.left)
  }

  Biggest(){
    let nodes = this.root
    return this.showBigNodeData(nodes.right)
  }

  showSmallNodeData(nodes){
    if(nodes.left === null){
      return nodes.data
    }else if(nodes.left !== null){
      return this.showSmallNodeData(nodes.left)
    }
}

  showBigNodeData(nodes){
    if(nodes.right === null){
      return nodes.data
    }else if(nodes.right !== null){
      return this.showBigNodeData(nodes.right)
    }
}
}

const ob = new BT()
ob.addNode(10)
ob.addNode(9)
ob.addNode(13)
ob.addNode(20)
ob.addNode(15)
ob.addNode(4)
ob.addNode(8)
ob.addNode(9)
ob.Display()

console.log(ob.Min())
console.log(ob.Biggest())
