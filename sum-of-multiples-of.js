function canDivideBy(number, divisors){
  for(j=0;j<divisors.length;j++) {
    if(number%divisors[j] == 0)
      return true;
  }
  return false;
}

function sumOfmultiplesOf(divisors){
  var sum = null;
  if(divisors) {
    sum = 0;
    for(i=1;i<1000;i++){
      if(canDivideBy(i, divisors))
        sum+=i;
    } 
  }
  return sum;
}
