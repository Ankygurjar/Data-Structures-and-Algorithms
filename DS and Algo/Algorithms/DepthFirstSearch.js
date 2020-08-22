class DFS{
  constructor(){
    this.dfs = new Map()
  }

  AddToDfs(node){
    if(!this.dfs.has(node)){
      this.dfs.set(node, [])
    }
  }

  Display(){
    for(let [key, value] of this.dfs){
      console.log(key, value)
    }
  }

  AddEdges(node, edges){
    let {dfs} = this
    if(dfs.has(node)){
      for(let edge of edges){
        if(dfs.has(edge)){
          let eleOfNode = dfs.get(node)
          eleOfNode.push(edge)
        }
      }
    }
  }

  InitialStatusNodes(){
    let status = {}
    for(let key of this.dfs.keys()){
      status[key] = false
    }
    return status
  }

  SearchMethod(source, dest){
    let {dfs} = this
    let count = 1
    let statusOfNode = this.InitialStatusNodes()
    let stack = []
    stack.push(source)
    while(stack.length){
      let currentNode = stack.pop()
      let nodesOfNode = dfs.get(currentNode)
      for(let node of nodesOfNode){
        if(statusOfNode[node] === false){
          if(node === dest){
            return count
          }else{
            statusOfNode[node] = true
            stack.push(node)
          }
        }
      }
      console.log(nodesOfNode)
      count++
    }
  }

}

const ob = new DFS()
const nodes = ['A','B','M','S','F']
for(let i of nodes){
  ob.AddToDfs(i)
}

ob.AddEdges('A', ['B'])
ob.AddEdges('B', ['S','M'])
ob.AddEdges('M', ['A','B'])
ob.AddEdges('S', ['B', 'F'])
ob.AddEdges('F', ['A'])

console.log(ob.SearchMethod('A', 'F'))

//ob.Display()
