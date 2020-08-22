class Stack {
  /*
    Functions Needed:
      Push : To push a new Item to stack
      Pop : To Delete a item from stack
      Peek : To find the top most item of the stack
      Length : To find the length of the stack
      Display : To Display the array
  */

  constructor(){
    this.arr = [1,5,6,2]
  }

  Display(){
    return this.arr
  }

  Push(val){
     this.arr.unshift(val)// this will add val to the beggining of array
     return this.arr
  }

  Pop(){
    if(this.Length() < 1){
      return undefined
    }else{
      var ele = this.arr[0]
      this.arr.splice(0, 1) //this will remove the first occuring element from the array
      return 'You have popped out : '+ele
    }
  }

  Peek(){
    if(this.Length() < 0){
      return 'Array does not Contain any element'
    }else{
      return this.arr[0]
    }
  }

  Length(){
    return this.arr.length
  }

}

const ob = new Stack()
console.log(ob.Push(3))
console.log(ob.Pop())
console.log(ob.Display())
console.log(ob.Peek())
console.log(ob.Length())
