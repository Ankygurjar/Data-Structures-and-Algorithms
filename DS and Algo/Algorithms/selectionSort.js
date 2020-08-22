class SelectionSort{
  constructor(arr){
    this.arr = arr
  }

  Display(){
    return this.arr
  }

  Length(){
    return this.arr.length
  }

  Sorting(){
    let min = 0
    let tmp = 0
    let len = this.Length()
    for(var i=0; i < len-1 ; i++){
      min = i
      for(var j = i; j<len; j++){
        if(this.arr[j] < this.arr[min]){
          min = j
        }
      }
      tmp = this.arr[i]
      this.arr[i] = this.arr[min]
      this.arr[min] = tmp
    }
  }

}

const ob = new SelectionSort([4,2,7,1,10,9,0])
console.log(ob.Display())
ob.Sorting()
console.log(ob.Display())
