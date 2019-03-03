function getZerosCount(number, base) {
    var num = number;
    var keynum = base;
    var count = 0;
    var stepen = 2;
    var arr = true;
    var half = 1;
    while (arr==true) {
      if (keynum == 2) {
        keynum = 2;
        break;
      } 
      for (var k=2; k<keynum/2; k++) {
       for (var l=2; l < 4; l++) {
           if (k**l == keynum) {
                half += l;
           }
       }  
      }  
      for (i=2; i<keynum; i++) {
        if (keynum%i == 0) {
          arr = true;
          break
        };
        arr = false
      };
    };
  
   count = Math.floor(num/keynum);
  
   while (keynum**stepen <= num) {
     count += Math.floor(num/(keynum**stepen));
     stepen += 1;
   }; 
  
   return Math.floor(count/half)
  }

console.log(getZerosCount(33234339, 108))