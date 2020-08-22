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

  Difference(n){
    const arr = this.Sorting()
    let maxSum=0
    let minSum=0
    maxSum = n+arr[(arr.length)-1]
    minSum = n+arr[0]
    return maxSum-minSum
  }

}

const ob = new Bubble([4,.23,5,1.3,-3])
console.log(ob.Sorting())
console.log(ob.Difference(4))
