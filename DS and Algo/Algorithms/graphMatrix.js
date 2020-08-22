class Graph{
  constructor(n, e){
    this.n = n
    this.AdjencyMatrix = []
    for(let i = 0; i< n; i++){
      this.AdjencyMatrix[i] = new Array()
      for(let j = 0; j<n; j++){
        this.AdjencyMatrix[i][j] = false
      }
    }
  }

  DisplayMatrix(){
    console.log(this.AdjencyMatrix)
  }

  AddVertexToMatrix(e1, e2){
    this.AdjencyMatrix[e1-1][e2-1] = true
  }

}

const ob = new Graph(3,6)
//ob.DisplayMatrix()
//ob.AddVertexToMatrix([[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]])
ob.AddVertexToMatrix(1, 2)
ob.AddVertexToMatrix(1, 3)
ob.AddVertexToMatrix(2, 1)
ob.AddVertexToMatrix(2, 3)
ob.AddVertexToMatrix(3, 1)
ob.AddVertexToMatrix(3, 2)
ob.DisplayMatrix()
