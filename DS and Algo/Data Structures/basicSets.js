class Sets{
  // Display() Function to Display the items of set
  // Has() Function to Verify wheter a element present in the set or not
  // Add() Function to add a element in the set
  // Remove() Function to remove a desired element from the set
  // Size() Function to get the size of the set

  constructor(){
    this.set = []
  }

  Display(){
    return this.set
  }

  Add(ele){
    if(this.Has(ele) === -1){
      this.set.push(ele)
      return true
    }else{
      return 'Set already has the element'
    }
  }

  Remove(ele){
    if(this.Has(ele) !== -1){
      var pos = this.set.indexOf(ele)
      this.set.splice(pos, 1)
      return true
    }else{
      return falase
    }
  }

  Has(ele){
    return this.set.indexOf(ele)
  }

  Union(otherSet){
    var newSet = new Set()
    otherSet.forEach((item, i) => {
      newSet.add(item)
    });
    this.set.forEach((item, i) => {
      newSet.add(item)
    });
    console.log(newSet)
  }

  Intersection(otherSet){
    var newSet = new Set()
    otherSet.forEach((item, i) => {
      if(this.Has(item)!==-1){
        newSet.add(item)
      }
    });

    console.log(newSet)
  }

  Subset(otherSet){
    var status = true
    otherSet.forEach((item, i)=>{
      if(this.Has(item) === -1){
        status = false
      }
    })
    return status
  }
}
const ob = new Sets()
ob.Has(2)
console.log(ob.Add(2))
console.log(ob.Add(3))
console.log(ob.Add(4))
console.log(ob.Add(8))
console.log(ob.Display())
console.log(ob.Remove(3))
console.log(ob.Display())
ob.Union([7,5,3,5])
ob.Intersection([7,2,3,5])
console.log(ob.Subset([3,2,3,8,3]))
