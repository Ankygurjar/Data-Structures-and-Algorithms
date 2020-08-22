class Graph{
  constructor(){
    this.adjencyList = new Map()
  }

  Display(){
    for(let [key, value] of this.adjencyList){
      console.log(key, value)
    }
  }

  AddVertex(vertex){
    if(!this.adjencyList.has(vertex)){
      this.adjencyList.set(vertex, [])
    }else{
      return false
    }
  }

  addEdge(vertex, node){
    if(this.adjencyList.has(vertex)){
      if(this.adjencyList.has(node)){
        let arr = this.adjencyList.get(vertex)
        if(!arr.includes(node)){
          arr.push(node);
        }
      }
    }
    else{
      console.log(`You don't have ${vertex}`)
    }
  }

}

const ob = new Graph()
let vertexes = ['A', 'B', 'C', 'D', 'E', 'F']
for(let i of vertexes){
  ob.AddVertex(i)
}


ob.addEdge('A', 'B');
ob.addEdge('A', 'D');
ob.addEdge('A', 'E');
ob.addEdge('B', 'C');
ob.addEdge('D', 'E');
ob.addEdge('E', 'F');
ob.addEdge('E', 'C');
ob.addEdge('C', 'F');
ob.Display()
