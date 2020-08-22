class Xor{
  constructor(arr){
    this.arr = new Array(arr)
    this.xor = 0
    console.log(this.arr[0])
  }

  xorOfArray(){
    for(var i = 0; i<this.arr[0].length; i++){
      this.xor = this.xor^this.arr[0][i]
    }
    return this.xor
  }

}

const ob = new Xor([3,9,12,13,15])
console.log(ob.xorOfArray())
