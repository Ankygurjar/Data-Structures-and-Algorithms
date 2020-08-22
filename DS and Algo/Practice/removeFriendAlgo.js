class Node{
  constructor(data){
    this.popularity = data
    this.next = null
  }
}

class Friends{
  constructor(){
    this.friendList = null
  }

  recursiveAddFriend(list, popularity){
    if(list.next === null){
      return list.next = new Node(popularity)
    }else{
      return this.recursiveAddFriend(list.next, popularity)
    }
  }

  AddFriendAndDelete(n, delN, popularity){
    let i = 0
    while(n > 0){
      if(this.friendList === null){
        this.friendList = new Node(popularity[0])
      }else{
          this.recursiveAddFriend(this.friendList, popularity[i])
      }
      i++
      n--
    }

    while(delN > 0){
      this.newFunc = ()=>{
          if(this.friendList.popularity < this.friendList.next.popularity){
              return this.friendList = this.friendList.next
          }else{
            let newFriend = this.friendList
            this.friendList.next.popularity = newFriend.popularity
            this.friendList = this.friendList.next
          }
      }
   this.newFunc()
    delN--
  }
  }


  Display(){
    while(this.friendList !== null){
      console.log(this.friendList.popularity)
      this.friendList = this.friendList.next
    }
  }

}

const ob = new Friends()
ob.AddFriendAndDelete(5,3, [23,45,11,77,18])
ob.Display()
