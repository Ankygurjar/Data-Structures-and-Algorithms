var reverse = function(x) {
    var num = 0
    while( Math.abs(x) > 0 ){
      console.log(x%10)
      num = num*10 + x%10
      console.log(num)
      x = Math.floor(Math.abs(x)/10)
    }
    console.log(num)
};

reverse(-321)
