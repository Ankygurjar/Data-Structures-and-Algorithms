'use strict'
class OOPs{
  constructor(name, height){
    this.name = name
    this.height = height
  }
}

class DOOPs{
  constructor(){
    this.am = new OOPs('Vinni', 5.6)
  }

  Display(){
    console.log(this.am)
  }
}

const ob = new OOPs('Ankit', 5.6)
//console.log(ob)
const ob2 = new DOOPs()
ob2.Display()
