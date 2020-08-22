class BubbleSort{
  constructor(arr){
    this.arr = arr
  }

  Display(){
    return this.arr
  }

  Sorting(){
    let tmp = 0
    var len = this.arr.length
    for(var i = 0; i < len; i++){
      for(var j = 0; j < len-1; j++){
        if(this.arr[j] > this.arr[j+1]){
          tmp = this.arr[j+1]
          this.arr[j+1] = this.arr[j]
          this.arr[j] = tmp
        }
      }
  }
    return this.arr
  }

}

const ob = new BubbleSort([6,2,4,3,5,1])
ob.Sorting()
console.log(ob.Display())
