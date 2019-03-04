module.exports = function getZerosCount(number, base) {
  var simpleArr = function (number) {
    var simplearr = [];
    var i = 2;
    while (i*i <= number) {
  
      while (number%i == 0) {
        simplearr.push(i);
        number = number/i;
      };
  
     i += 1; 
    };
  
    if (number>1) {
      simplearr.push(number)
    
    };
  return simplearr
  };
  
  var ZeroCounter = function (number, base) {
  var keynumarr = simpleArr(base);
//  console.log(keynumarr)
  var setarr = [];
  setarr.push(keynumarr[0]);
  
  if (keynumarr.length > 1) {
    for (var k=1; k<keynumarr.length; k++) {
        if (keynumarr[k] != keynumarr[k-1]) {
            setarr.push(keynumarr[k]);    
        };
    };
    };
 //   console.log(setarr);
    var ans = []
    
  for (var l=0; l<setarr.length; l++) {
    keyindex = keynumarr.filter(word => word == setarr[l]).length;
    ans.push(counter(number, setarr[l], keyindex)) 
  };
  var answer = ans[0];
  for (var i=1; i<ans.length; i++) {
    if (ans[i] < answer) {
      answer = ans[i];
    };
  };
  return answer
  };
  
  var counter = function(num, keynum, keyindex) {
    var count = 0;
    var step = 0;
   // console.log("BASE = " + num + ", keynum = " + keynum + " keindex = " + keyindex);
    while (keynum ** step <= num) {
      
      step += 1;
    };
  
    for (var i=1; i <= step; i++) {
      count += Math.floor(num/(keynum ** i));
    };
    count = Math.floor(count/keyindex);
    return count
  };
return ZeroCounter(number,base)
  };
  
