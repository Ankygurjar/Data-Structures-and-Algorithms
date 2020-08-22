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

  searchRightNode(ele, node){
     if(node === null){
      return false
    }

    else if(ele === node.data){
      return true
    }else if(ele > node.data){
      return this.searchRightNode(ele,node.right)
    }
    else if(ele < node.data){
      return this.searchRightNode(ele,node.left)
    }

  }

  searchLeftNode(ele, node){
    if(node === null){
      return false
    }
    else if(ele === node.data){
      return true
    }else if(ele > node.data){
      return this.searchLeftNode(ele,node.right)
    }
    else if(ele < node.data){
      return this.searchLeftNode(ele,node.left)
    }

  }

  searchNode(element){
    if(element === this.root.data){
      return true
    }
    else if(element > this.root.data){
      return this.searchRightNode(element, this.root.right)
    }else if(element < this.root.data){
      return this.searchLeftNode(element, this.root.left)
    }
  }


}

const ob = new TraverseTree()
ob.addNode(12)
ob.addNode(10)
ob.addNode(13)
ob.addNode(13)
ob.addNode(9)

console.log(ob.Display())
console.log(ob.searchNode(15))
