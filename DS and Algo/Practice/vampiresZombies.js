class VampiresZombies{
  constructor(arr){
    this.arr = arr
  }

  CheckEvenOdd(n){
    if(n%2===0)
      return true
    else if(n%2!==0)
      return false
  }

  AddArr(evenArr){
    let sum = 0
    for(let i=0; i<evenArr.length; i++){
      sum = sum+evenArr[i]
    }
    evenArr.push(sum)
    return evenArr
  }

  CreatureSorting(){
    let {arr} = this
    let sumEven = []
    let sumOdd = []
    let newArr = []
    for(let i = 0; i<arr.length; i++){
      for(let j = i; j<arr.length; j++){
        if((this.CheckEvenOdd(arr[j])) === false && arr[j] < arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    for(let i = 0; i<arr.length; i++){
      if(this.CheckEvenOdd(arr[i]) === false){
          sumEven = this.AddArr(arr.slice(0, i))
          sumOdd = this.AddArr(arr.slice(i, arr.length))
          break
      }
    }
    newArr = sumEven.concat(sumOdd)
    console.log(newArr)
  }

}

const ob = new VampiresZombies([2,3,10,12,15,22])
ob.CreatureSorting()
