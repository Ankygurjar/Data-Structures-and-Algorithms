class Islands{
  constructor(){
    this.bridges = new Map()
  }

  AddIslands(bridge){
    if(!this.bridges.has(bridge)){
      this.bridges.set(bridge, [])
    }
  }

  Display(){
    for(let [key, value] of this.bridges){
      console.log(key, value)
    }
  }

  AddBridge(island, bridges){
    if(this.bridges.has(island)){
      for(let b of bridges){
        if(this.bridges.has(b)){
          let arr = this.bridges.get(island)
          arr.push(b)
        }
      }
    }
  }

  AddVisitedObject(){
    let arr = {}
    for(let key of this.bridges.keys()){
      arr[key] = false
    }
    return arr
  }

  ToIsland(sourceIsland, destinationIsland){
    if(!this.bridges.has(sourceIsland) || !this.bridges.has(destinationIsland)){
      return 'Not Found'
    }
    let count = 0
    let visitedNodes = this.AddVisitedObject()
    visitedNodes[sourceIsland] = true
    let q = []
    q.push(sourceIsland)
    while(q.length){
      let current = q.pop()
      let arr = this.bridges.get(current)

      for(let i of arr){
        if(visitedNodes[i] === false){
        if(i === destinationIsland){
          return count
        }else{
          visitedNodes[i] = true
          q.unshift(i)
        }
      }
      }
      count++
    }
  }

}

const ob = new Islands()
const bridges = ['F','W','D','Q','K','U','E','B','M']

for(let b of bridges){
  ob.AddIslands(b)
}

ob.AddBridge('F', ['W', 'U'])
ob.AddBridge('W', ['F', 'D'])
ob.AddBridge('D', ['K', 'U'])
ob.AddBridge('Q', ['W', 'B'])
ob.AddBridge('K', ['Q', 'E'])
ob.AddBridge('U', ['F', 'D'])
ob.AddBridge('E', ['K', 'M'])
ob.AddBridge('B', ['M', 'Q'])
ob.AddBridge('M', ['D', 'Q'])
//ob.Display()
console.log(ob.ToIsland('F', 'B'))
