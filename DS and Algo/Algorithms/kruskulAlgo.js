class Edge{
  constructor(end, weight){
    this.end = end
    this.weight = weight
  }
}

class Kruskul{
  constructor(){
    this.graph = new Map()
  }

  Display(){
    for(let [key, value] of this.graph){
      console.log(key, value)
    }
  }

  AddNodeToGraph(node){
    if(!this.graph.has(node)){
      this.graph.set(node, [])
    }
  }

  AddEdgesToNodes(start, end, weight){
    if(this.graph.has(start) && this.graph.has(end)){
      let arrOfChilds = this.graph.get(start)
      arrOfChilds.push(new Edge(end, weight))
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
    ob.AddEdgesToNodes('v2', 'v1', 3)
    ob.AddEdgesToNodes('v2', 'v3', 2)
    ob.AddEdgesToNodes('v2', 'v5', 6)
    ob.AddEdgesToNodes('v3', 'v1', 4)
    ob.AddEdgesToNodes('v3', 'v2', 2)
    ob.AddEdgesToNodes('v3', 'v5', 2)
    ob.AddEdgesToNodes('v3', 'v6', 3)
    ob.AddEdgesToNodes('v4', 'v1', 1)
    ob.AddEdgesToNodes('v4', 'v6', 5)
    ob.AddEdgesToNodes('v5', 'v2', 6)
    ob.AddEdgesToNodes('v5', 'v3', 2)
    ob.AddEdgesToNodes('v5', 'v6', 1)
    ob.AddEdgesToNodes('v6', 'v3', 3)
    ob.AddEdgesToNodes('v6', 'v4', 5)
    ob.AddEdgesToNodes('v6', 'v5', 1)
ob.Display()
