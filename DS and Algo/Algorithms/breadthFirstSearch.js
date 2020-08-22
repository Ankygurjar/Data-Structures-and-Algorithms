class BFS{
  constructor(){
    this.graph = new Map()
  }

  AddVertex(vertex){
    if(!this.graph.has(vertex)){
      this.graph.set(vertex, [])
    }else
      return `You already have ${vertex} in the graph`
  }

  Display(){
    for(let [key, value] of this.graph){
      console.log(key, value)
    }
  }

  addEdge(vertex, edges){
    if(this.graph.has(vertex)){
      for(let edge of edges){
        if(this.graph.has(edge)){
          let arr = this.graph.get(vertex)
          arr.push(edge)
        }
      }
    }
  }

  visitedObject(){
    let arr = {}
    for(let i of this.graph.keys()){
      arr[i] = false
    }
    return arr
  }

  bfs(vertex){
    let visited = this.visitedObject()
    let q = []
    visited[vertex] = true
    q.push(vertex)

    while(q.length){
      let c = q.pop()
      let elementsOfCurrentNode = this.graph.get(c)
      for(let ele of elementsOfCurrentNode){
        if(!visited[ele]){
          visited[ele] = true
          q.unshift(ele)
        }
      }
      console.log(c)
    }
  }

}

const ob = new BFS()
let vrr = ['A','B','C','D','E','F']

for(let i of vrr){
  ob.AddVertex(i)
}

ob.addEdge('A', ['B','D','E'])
ob.addEdge('B', ['C'])
ob.addEdge('C', ['F'])
ob.addEdge('D', ['E'])
ob.addEdge('E', ['C','F'])

ob.bfs('C')
//ob.Display()
