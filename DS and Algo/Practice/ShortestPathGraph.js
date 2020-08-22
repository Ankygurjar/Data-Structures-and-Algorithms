class Graph{
  constructor(){
    this.graph = new Map()
  }

  AddVertex(vertex){
    if(!this.graph.has(vertex)){
      this.graph.set(vertex, [])
    }else{
      return `You already have ${vertex} in the graph`
    }
  }

  AddEdge(vertex, edges){
    if(this.graph.has(vertex)){
      for(let edge of edges){
        if(this.graph.has(edge)){
          let arr = this.graph.get(vertex)
          arr.push(edge)
        }
      }
    }
  }

  Display(){
    for(let [key, value] of this.graph){
      console.log(key, value)
    }
  }

  CreateVisitedNode(){
    let arr = {}
    for(let key of this.graph.keys()){
      arr[key] = false
    }
    return arr
  }

  NodeSearch(v1, v2){
    let q = []
    let visitedNodes = this.CreateVisitedNode()
    visitedNodes[v1] = true
    if(visitedNodes[v2] === undefined)
      return 'Element not in the graph'
    q.push(v1)
    let counter = 0
    while(q.length){
      let current = q.pop()
      let arr = this.graph.get(current)
      console.log(arr)
      for(let i of arr){
        if(!visitedNodes[i]){
          if(i===v2){
            if(counter===0)
              return 1
            else if(counter !== 0)
              return counter
          }else if(i!==v2){
            visitedNodes[i] = true
            q.unshift(i)
          }
        }
      }
    }
  }

}

const ob = new Graph()

let vrr = ['A','F','C','E','G','H','I','J','K','L']
for(let i of vrr){
  ob.AddVertex(i)
}

ob.AddEdge('A', ['E','I','C'])
ob.AddEdge('F', ['C','H','G'])
ob.AddEdge('C', ['A','H','F'])
ob.AddEdge('E', ['A','K','I'])
ob.AddEdge('G', ['F'])
ob.AddEdge('H', ['C','F'])
ob.AddEdge('I', ['A','E'])
ob.AddEdge('J', ['K','L'])
ob.AddEdge('K', ['D', 'E','J'])
ob.AddEdge('L', ['D','J'])
console.log(ob.NodeSearch('A','L'))

ob.Display()
