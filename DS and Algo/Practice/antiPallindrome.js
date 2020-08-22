class antiPallindrome{
  constructor(string){
    this.str = string
    this.mapping = new Map()
    this.values = []
  }

  Display(){
    return this.str
  }

  checkPallindrome(){
    let {str} = this
    let lettersOfStr = []
    let newStr = ''
    for(let i=0; i<str.length; i++){
      lettersOfStr.push(str[i])
    }
    for(let i=0; i<str.length; i++){
      newStr += lettersOfStr.pop()
    }
    if(newStr === str){
      return false
    }
  }

  insertInMap(){

    let {mapping, values, str} = this
    let index = 0
    values.map((code, i)=>{
      mapping.set(str[i], code)
    })
  }

  stringToArray(string){
    let {str} = this
    let arr = []
    for(let i=0; i<str.length; i++){
      arr[i] = str[i]
    }
    return arr
  }

  sorting(arr){
    let min = 0
    let tmp = 0
    for(let i = 0; i< arr.length-1; i++){
      min = i
      for(let j = i; j< arr.length; j++){
        if(this.mapping.get(arr[j]) < this.mapping.get(arr[min])){
          min = j
        }
      }
      tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
    return arr.join('')
  }

  Main(){
    if(this.checkPallindrome() === false){
      return -1
    }
    this.getAscii()
    this.insertInMap()

    let {mapping, str} = this
    let value = 0
    let arr = this.stringToArray(str)
    return this.sorting(arr)
  }

  getAscii(){
    let {str} = this
    let {values} = this
    for(let i = 0; i<str.length; i++){
      values.push(str.charCodeAt(i))
    }
  }

}

const ob = new antiPallindrome("deep")
console.log(ob.Main())
