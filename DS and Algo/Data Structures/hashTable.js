const hash = require('./try')

class Node {
  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class HashTable{
  constructor(){
    this.hashTable = []
  }

  Populate(){
    return null
  }

  Display(){
    for(var i =0; i<this.hashTable.length; i++){
      console.log(typeof(this.hashTable[i]))
    }
  }

  Add(data){
    for(var i = 0; i<data.length; i++){
      let pos = hash.Hashing(data[i], data.length)
      this.hashTable[pos] = this.Populate()
      if(this.hashTable[pos] === null){
        if(typeof(this.hashTable[pos]) !== ''){
          console.log(true)
        }
      }
    }
  }

}


const ob = new HashTable()

ob.Add([1,2,3,4,5,9])
//ob.Display()
