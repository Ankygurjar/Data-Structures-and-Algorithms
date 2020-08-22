class PriorityQueue{

  // Enqueue() Function that will insert the elements into the array based up on thier priorities
  // Dequeue() Function that will remove the element from the array
  // Peek() Function that will return the topmost element of the queue
  // Length() Function that will return the length of the queue
  // Display() Function that will return the values of the queue

  constructor(){
    this.queue = []
  }

  Display(){
    return this.queue
  }

  isEmpty(){
    if(this.queue.length <1){
      return true
    }
  }

  Enqueue(ele){
    if(this.isEmpty()){
      this.queue.push(ele)
      return true
    }else{
      var status = false
      for(var i = 0; i< this.queue.length ; i++){
        if(ele[1] < this.queue[i][1]){ // To check the priority of the given element
          this.queue.splice(i, 0, ele) 
          status = true
          return status
        }
      }
      if(status === false){
        this.queue.push(ele)
        return true
      }
    }
  }

  Dequeue(){
    return this.queue.shift()
  }

  Peek(){
    return this.queue[0]
  }

  Length(){
    return this.queue.length
  }

}

const ob = new PriorityQueue()
console.log(ob.Enqueue(['Ankit', 4]))
console.log(ob.Enqueue(['Vinnet', 6]))
console.log(ob.Enqueue(['Anky', 3]))
console.log(ob.Enqueue(['Anky', 5]))
console.log(ob.Display())
console.log(ob.Dequeue())
console.log(ob.Display())
console.log(ob.Peek())
console.log(ob.Length())
