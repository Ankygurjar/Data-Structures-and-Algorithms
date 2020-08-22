class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}


class KrushKal{
    constructor(){
        this.graph = new Map()
        this.tree = new TreeNode()
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

    AddNodeToTree(node){
        let curNode = new TreeNode(node)
        
    }

    AddEdgesToNodes(node, edges){
        let {graph} = this
        if(graph.has(node)){
            for(let edge of edges){
                let childsOfNode = graph.get(node)
                childsOfNode.push(edge)
            }
        }
    }

    Graph(nodes){
        for(let node of nodes){
            this.AddNodesToGraph(node)
        }
    }

}


const ob = new KrushKal()

const nodes = new Array('v1', 'v2', 'v3', 'v4', 'v5', 'v6')

ob.Graph(nodes)

ob.AddEdgesToNodes('v1', ['v2','v3', 'v4'])
ob.AddEdgesToNodes('v2', ['v1','v3', 'v5'])
ob.AddEdgesToNodes('v3', ['v1','v2', 'v5','v6'])
ob.AddEdgesToNodes('v4', ['v1','v6'])
ob.AddEdgesToNodes('v5', ['v2','v3', 'v6'])
ob.AddEdgesToNodes('v6', ['v5','v3', 'v6'])

ob.Display()
ob.AddNodeToTree('v1')