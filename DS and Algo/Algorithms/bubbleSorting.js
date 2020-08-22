class Bubble{
  constructor(arr){
    this.arr = arr
  }

  Display(){
    return this.arr
  }

  Sorting(){
    let {arr} = this
    for(let i=0; i<arr.length; i++){
      let curEle = i
      for(let j=i; j<arr.length; j++){
        if(arr[curEle]>arr[j+1]){
          let temp = arr[j+1]
          arr[j+1] = arr[curEle]
          arr[curEle] = temp
        }
      }
    }
    return arr
  }

}

const ob = new Bubble([5,129,1231,3,232])
console.log(ob.Sorting())
