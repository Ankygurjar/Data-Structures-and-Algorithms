class Student{
  constructor(student){
    this.id = student[0]
    this.name = student[1]
    this.address = student[2]
  }
}

class School{
  constructor(data){
    this.schoolData = []
  }

  Hashing(data, len){
    let square = toString(data)
	retu
	
  }

  Length(array){
    return array.length
  }

  Add(array){
    let len = this.Length(array)
    array.forEach((student, i)=>{
      let index = this.Hashing(student[0], len)
	  console.log(index)
      if(this.schoolData[index] === undefined){
        this.schoolData[index] = new Student(student)
      }else if(this.schoolData[index] !== undefined){
        for(let i = index; i<this.schoolData.length; i++){
          if(this.schoolData[i] === undefined){
            this.schoolData[i] = new Student(student)
			return 
          }
        }
      }
    })
  }

  Display(){
    return this.schoolData
  }

  Delete(idDelete){
    var id = this.schoolData.indexOf(this.Student(idDelete))
    this.schoolData.splice(id, 1)
  }

  Student(id){
    let studentId = this.Hashing(id, this.schoolData.length)
    if(this.schoolData[studentId]['id'] === id){
      return this.schoolData[studentId]
    }else {
      for(let i = studentId; i<this.schoolData.length; i++){
        if(this.schoolData[i]['id'] === id){
          return this.schoolData[i]
        }
      }
    }
  }

}

const ob = new School()
ob.Add([[4000,'A','Montreal'], [2206,'B','Montreal'],[1205,'C','Toronto'], [1231,'D', 'Dehradun'], [1206,'E' , 'Elephant'], [5432, 'F', 'Framboise'], [6547, 'G', 'Lemonade']])
//console.log(ob.Student(1205))
console.log(ob.Display())
//ob.Delete(1205)
console.log(ob.Display())
