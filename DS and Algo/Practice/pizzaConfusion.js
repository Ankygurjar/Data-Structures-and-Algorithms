class Restaurants{
  constructor(array){
    this.restaurants = []
    for(let i =0; i<array.length; i++){
      this.restaurants[i] = array[i]
    }
  }

  Display(){
    return this.Sorting()
  }

  Sorting(){
    let {restaurants} = this
    for(let i=0; i<restaurants.length; i++){
      let curRestaurant = i
      for(let j=0; j<restaurants.length; j++){
        if(restaurants[curRestaurant][1]<restaurants[j][1]){
          let temp = restaurants[curRestaurant]
          restaurants[curRestaurant] = restaurants[j]
          restaurants[j] = temp
        }
      }
    }
    return restaurants
  }

  DesiredRestaurent(){
    let arr = this.Sorting()
    return arr[arr.length-1][0]
  }

}

const ob = new Restaurants([['Pizzeria', 108], ['Dominos', 145], ['Pizza Pizza', 749],['Sanna', 99], ['Three Amigos', 735], ['Singh Bros', 449]])
//console.log(ob.Display())
console.log(ob.DesiredRestaurent())
