class BubbleSort{
  constructor(arr){
    this.arr = arr
  }

  Display(){
    return this.arr
  }

  Sorting(){
    let newArr = this.arr.slice(0)
    for(let i=0;i<newArr.length; i++){
      let curEle = i
      for(let j=i; j<newArr.length; j++){
        if(newArr[curEle] > newArr[j+1]){
          let temp = newArr[curEle]
          newArr[curEle] = newArr[j+1]
          newArr[j+1] = temp
        }
      }
    }
    return newArr
  }

  Indices(){
    let sorted = this.Sorting()
    let {arr} = this
    let indicesArr = []
    for(let i = 0; i<sorted.length; i++){
      indicesArr[i] = arr.indexOf(sorted[i])
    }
    return indicesArr
  }
}

const ob = new BubbleSort([4,5,3,7,1])
//console.log(ob.Display())
ob.Sorting()
console.log(ob.Indices())
