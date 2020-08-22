class FlightPlan{
  constructor(){
    this.cities = new Map()
  }

  Display(){
    let {cities} = this
    for(let [key, value] of cities){
      console.log(key, value)
    }
  }

  AddCities(city){
    let {cities} = this
    if(!cities.has(city)){
      cities.set(city, [])
    }
  }

  AddRoutes(city, route){
    let {cities} = this
    if(cities.has(city)){
      if(cities.has(route)){
        let routesOfCity = cities.get(city)
        routesOfCity.push(route)
      }
    }
  }

  InitialStateOfAirports(){
    let state = {}
    for(let key of this.cities.keys()){
      state[key] = 'running'
    }
    return state
  }

  FindShortestPath(X, Y){
    let {cities} = this
    let runningState = 'running'
    let loadingState = 'loading'
    let stateOfAirports = this.InitialStateOfAirports()
    if(stateOfAirports[X] !== undefined && stateOfAirports[Y] !== undefined){
      let q = []
      let minutesTaken = 1
      const timeToRunning = 3
      stateOfAirports[X] = loadingState
      q.push(X)
      while(q.length){
        let currentAirport = q.pop()
        let currentAirportNeighbours = cities.get(currentAirport)
        for(let airport of currentAirportNeighbours){
          if(stateOfAirports[airport] === runningState){
            if(airport === Y){
              return [minutesTaken, [currentAirport, currentAirportNeighbours]]
            }else{
              stateOfAirports[X] = loadingState
              q.unshift(airport)
            }
          }
        }
        minutesTaken++
      }
    }else{
      return 'Invalid Values'
    }
  }

}

const ob = new FlightPlan()
let city = [1,2,3,4,5]

for(let i of city){
  ob.AddCities(i)
}

ob.AddRoutes(1,2)
ob.AddRoutes(1,3)
ob.AddRoutes(2,4)
ob.AddRoutes(3,5)
ob.AddRoutes(2,3)
ob.Display()
console.log(ob.FindShortestPath(1,5))
