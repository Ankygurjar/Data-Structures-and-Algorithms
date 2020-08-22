class Insertion{
  constructor(arr){
    this.arr = arr
  }

  Display(){
    return this.Sorting()
  }

  Sorting(){
    let {arr} = this
    let temp = 0
    for(let i=1; i<=arr.length; i++){
      temp = arr[i]
      for(let j = i-1; j>=0 && temp<arr[j]; j--){
          let tmp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = tmp
      }
    }
    return arr
  }

}

const ob = new Insertion([5,2,4,3,1])
ob.Sorting()
console.log(ob.Display())
