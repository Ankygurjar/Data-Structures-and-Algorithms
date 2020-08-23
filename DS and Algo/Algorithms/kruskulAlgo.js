class Edge{
  constructor(first, second, weight){
    this.first = first
    this.second = second
    this.weight = weight
  }
}

class KrushKal{
    constructor(){
        this.graph = new Map()

    }

    AddNodesToGraph(node){
        if(!this.graph.has(node)){
            this.graph.set(node, [])
        }
    }

    Display(){
        for(let [key, value] of this.graph){
            console.log(key, value)
        }
    }

    AddNodeToTree(){
        let arrOfNodes = {}
        for(let key of this.graph.keys()){
            arrOfNodes[key] = new Set()
        }
    }

    AddEdgesToNodes(node, edge){
      let {graph} = this
      if(graph.has(node)){

        }
      }
    }

    Graph(){
      let {AddNodeToTree, AddEdgesToNodes, Display} = this
        for(let node of nodes){
            AddNodesToGraph(node)
        }
        AddEdgesToNodes('v1', 'v4', 1)
        AddEdgesToNodes('v1', 'v3', 4)
        AddEdgesToNodes('v1', 'v2', 3)
        AddEdgesToNodes('v2', 'v1', 3)
        AddEdgesToNodes('v2', 'v3', 2)
        AddEdgesToNodes('v2', 'v5', 6)
        AddEdgesToNodes('v3', 'v1', 4)
        AddEdgesToNodes('v3', 'v2', 2)
        AddEdgesToNodes('v3', 'v5', 2)
        AddEdgesToNodes('v3', 'v6', 3)
        AddEdgesToNodes('v4', 'v1', 1)
        AddEdgesToNodes('v4', 'v6', 5)
        AddEdgesToNodes('v5', 'v2', 6)
        AddEdgesToNodes('v5', 'v3', 2)
        AddEdgesToNodes('v5', 'v6', 1)
        AddEdgesToNodes('v6', 'v3', 3)
        AddEdgesToNodes('v6', 'v4', 5)
        AddEdgesToNodes('v6', 'v5', 1)
        Display()
    }

}


const ob = new KrushKal()

const nodes = new Array('v1', 'v2', 'v3', 'v4', 'v5', 'v6')

ob.Graph(nodes)

//ob.Display()
