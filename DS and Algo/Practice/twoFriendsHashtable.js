class Friends{
  constructor(data){
    this.array = data
  }

  Display(){
    return this.array
  }

  SquareRoot(item){
    let root = Math.sqrt(item)
    if(root%1 === 0)
      return true
    else
      return false
  }

  CheckLoop(){
    let sum = 0
    let ele = 0
    let numOfSquare = 0
    for(let i = 0; i<this.array.length-1 ; i++){
       ele = i
      for(let j = i; j<this.array.length; j++){
        sum = this.array[ele] + this.array[j]
        if(this.SquareRoot(sum)=== true){
          numOfSquare++
        }
      }
    }
    return numOfSquare
  }
}

const ob1 = new Friends([1,2,3,4,5])
const ob2 = new Friends([1,4,5,8])
console.log(ob1.CheckLoop())
console.log(ob2.CheckLoop())
