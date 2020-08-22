class Graph{
  constructor(){
    this.graph = new Map()
  }

    AddNode(item){
      if(!this.graph.has(item)){
        this.graph.set(item, [])
      }
    }

    Display(){
      for(let [key, value] of this.graph){
        console.log(key, value)
      }
    }

    AddEdges(node, edges){
      let {graph} = this
      if(graph.has(node)){
        for(let edge of edges){
          let childs = graph.get(node)
          childs.push(edge)
        }
      }
    }

    Visited(){
      let arr = {}
      for(let key of this.graph.keys()){
        arr[key] = false
      }
      return arr
    }

    DFS(start, end){
      let visitedNodes = this.Visited()
      let stackOfNodes = []
      let count = 0
      stackOfNodes.push(start)
      visitedNodes[start] = true
      while(stackOfNodes.length){
        let curNode = stackOfNodes.pop()
        let arrOfChilds = this.graph.get(curNode)
        for(let i=0; i<arrOfChilds.length; i++){
          console.log(arrOfChilds[i])
          if(visitedNodes[arrOfChilds[i]] === false){
            if(arrOfChilds[i] === end){
              return count
            }
            else{
              visitedNodes[arrOfChilds[i]] = true
              stackOfNodes.push(arrOfChilds[i])
            }
          }
        }
        count++
      }
    }

}

const ob = new Graph()
let arr = [1,2,3,4,5]

for(let item of arr){
  ob.AddNode(item)
}

ob.AddEdges(2, [3, 5])
ob.AddEdges(1, [3, 2])
ob.AddEdges(3, [5, 4])
ob.AddEdges(5, [5])

//ob.Display()

console.log(ob.DFS(2, 4))
