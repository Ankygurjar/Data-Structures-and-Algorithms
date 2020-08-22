class Subsets{

  constructor(array){
    this.arr = array
  }

  Display(){
    console.log(this.arr)
  }

  PossibleSubsets(){
    let len = this.arr.length
    let subsets= 1
    for( let i = 0; i<len; i++){
      subsets = subsets * 2
    }
    return subsets
  }

  Subsets(){
    let allSubsets = []
    let subs = this.PossibleSubsets()
    let n = this.arr.length
    let curEle = 0
    for (var i=0; i<(Math.pow(2,n)); i++) {
       var subset = [];
       for(var j=0; j<n; j++) {
         if( (i & (1<<j)) > 0 )
           subset.push(this.arr[j]);
       }
       allSubsets.push(subset);
      }
    return allSubsets
  }

  SummisionOfSubsets(){
    let subsets = this.Subsets()
    let bigSum = 0
    let itemSubset = 0
    let subsetSum = []
    subsets.forEach((item, i) => {
      let newSum = 0
      if(item.length > 1){
        item.forEach((ele, j)=>{
          newSum = newSum+ele
        })
        if(newSum > bigSum){
          bigSum = newSum
          itemSubset = item
          subsetSum = item
        }
      }
    });
    return [bigSum,itemSubset.length]
  }

}

const ob = new Subsets([1, 2, -4, -2, 3])
console.log(ob.SummisionOfSubsets())
