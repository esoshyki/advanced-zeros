module.exports = function getZerosCount(number, base) {
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
    for (i=2; i<keynum; i++) {
      if (keynum%i == 0) {
        if (Number.isInteger(keynum**0.5)) {
        half += 1};
        if (i*i*i == keynum) { half += 2};
        keynum = keynum / i;
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