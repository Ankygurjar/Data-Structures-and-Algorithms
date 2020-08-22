class Fibonacci{

  constructor(){
    this.fib = []
  }

  Fib(len){
    for(let i = 0; i< len; i++){
      if(i === 0){
        this.fib[0] = 1
      }else if( i === 1){
        this.fib[1] = 1
      }else{
        this.fib[i] = this.fib[i-1] + this.fib[i-2]
      }
    }
  }

  Display(){
    console.log(this.fib, this.fib.length)
  }
}

const ob = new Fibonacci()
ob.Fib(10)
ob.Display()
