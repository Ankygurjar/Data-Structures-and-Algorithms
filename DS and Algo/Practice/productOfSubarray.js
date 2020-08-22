class ProductSubArray{
  constructor(arr){
    this.arr = arr
  }

  Product(){
    let lenOfArray = this.arr.length
    let product = 1
    for(let i = 0; i <lenOfArray; i++){
      for(let j = i; j<lenOfArray; j++){
        for(let k = i; k <= j; k++){
          product = product * this.arr[j]
        }
      }
    }
    console.log(product)
  }
}

const ob = new ProductSubArray([10,3,7])
ob.Product()
