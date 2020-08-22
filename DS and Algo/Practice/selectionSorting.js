class SelectionSort{
  constructor(array){
    this.array = array
  }

  Display(){
    return this.array
  }

  Sorting(){
    let {array} = this
    let min
    for(let i =0; i<array.length; i++){
      min = i
      for(let j = i+1; j<array.length; j++){
        if(array[j]<array[min]){
          min = j
        }
      }
      let temp = array[min]
      array[min] = array[i]
      array[i] = temp
    }
  }

}

const ob = new SelectionSort([3,4,1,5,2])

ob.Sorting()
console.log(ob.Display())
