class Edge{
  constructor(start, end, weight){
    this.start = start
    this.end = end
    this.weight = weight
  }
}

class Kruskul{
  constructor(){
    this.graph = new Map()
    this.spanningTree = new Set()
  }

  Display(){
    console.log(this.spanningTree)
  }

  SetForNodes(){
    let sets = []
    let i = 0
    for(let key of this.graph.keys()){
      sets[i] = new Set([key])
      i++
    }
    return sets
  }

  FindNodePresence(set, start, end){
    for(let i = 0; i<set.length; i++){
      if(set[i].has(start) && set[i].has(end)){
        return false
      }
    }
  }

  FindNodeIndex(set, index){
    for(let i = 0; i<set.length; i++){
      if(set[i].has(index)){
        return i
      }
    }
  }

  AddSetToTree(){
    let sets = this.SetForNodes()
    
    let sortedEdges = this.SortingOfEdges()
    //console.log(sortedEdges)
    for(let i = 0; i<sortedEdges.length; i++){
      if(!this.FindNodePresence(sets, sortedEdges[i].start, sortedEdges[i].end))
        {
          let indexOfStart = this.FindNodeIndex(sets, sortedEdges[i].start)
          let indexOfEnd = this.FindNodeIndex(sets, sortedEdges[i].end)
          let [values] = sets[indexOfEnd].values()
          console.log(values)
          sets[indexOfStart].add(values)
          sets.splice(indexOfEnd, 1)
          console.log(sets)
          
          
        }
    }
  }

  AddNodeToGraph(node){
    if(!this.graph.has(node)){
      this.graph.set(node, [])
    }
  }

  SortingOfEdges(){
    let allEdges = []
    let min = 0
    let newArr = []
    for(let edge of this.graph.values()){
      allEdges.push(edge)
    }

    for(let edges of allEdges){
      for(let i of edges){
        newArr.push(i)
      }
    }
    
    for(let i = 0; i<newArr.length-1 ; i++){
      min = i
      for(let j = i; j<newArr.length; j++){
        if(newArr[j].weight < newArr[min].weight){
          min = j
        }
      }
      let temp = newArr[min]
      newArr[min] = newArr[i]
      newArr[i] = temp
    }
    return newArr
  }

  AddEdgesToNodes(start, end, weight){
    if(this.graph.has(start) && this.graph.has(end)){
      let arrOfChilds = this.graph.get(start)
      arrOfChilds.push(new Edge(start, end, weight))
    }
  }

  Main(){
    const nodeOfGraph = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6']
    for(let node of nodeOfGraph){
      this.AddNodeToGraph(node)
    }


  }

}

const ob = new Kruskul()
ob.Main()
    ob.AddEdgesToNodes('v1', 'v4', 1)
    ob.AddEdgesToNodes('v1', 'v3', 4)
    ob.AddEdgesToNodes('v1', 'v2', 3)
    ob.AddEdgesToNodes('v2', 'v3', 2)
    ob.AddEdgesToNodes('v2', 'v5', 6)
    ob.AddEdgesToNodes('v3', 'v5', 2)
    ob.AddEdgesToNodes('v3', 'v6', 3)
    ob.AddEdgesToNodes('v4', 'v6', 5)
    ob.AddEdgesToNodes('v5', 'v6', 1)
//ob.Display()
ob.SetForNodes()
ob.SortingOfEdges()
ob.AddSetToTree()
//ob.Display()
