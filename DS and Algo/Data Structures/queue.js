function Queue(){

  /*
    Following Functions Will Be Made
    Enqueue() : To enter elements into Queue
    Dequeue() : To remove elements from Queue
    Length() : To know the length of the Queue
    Peek() : To know the topmost element of the Queue
    Display() : To Display the Queue
  */

  this.arr = [2,3,4,5]

  this.Display = () =>{
    return this.arr
  }

  this.Enqueue = (ele) =>{
    this.arr.push(ele) // to enter ele at the end of the array
    return this.arr
  }

  this.Dequeue = () =>{
    this.arr.shift() // to remove the topmost element from the array
    return this.arr
  }

  this.Length = () =>{
    return this.arr.length // to return the length of the array
  }

  this.Peek = () =>{
    return this.arr[0] // to reutnr the topmost element of the array
  }

}

const ob = new Queue()
console.log(ob.Enqueue(4))
console.log(ob.Display())
console.log(ob.Dequeue())
console.log(ob.Length())
console.log(ob.Peek())
