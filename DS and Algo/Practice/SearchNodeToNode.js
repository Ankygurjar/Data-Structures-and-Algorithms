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
            counter++
          }
        }
      }
    }
  }

}

const ob = new Graph()

let vrr = ['A','F','C','E','G']
for(let i of vrr){
  ob.AddVertex(i)
}

ob.AddEdge('A', ['C','G'])
ob.AddEdge('F', ['G','E'])
ob.AddEdge('C', ['A','E'])
ob.AddEdge('E', ['C'])
ob.AddEdge('G', ['A','E'])
console.log(ob.NodeSearch('A','F'))

ob.Display()
