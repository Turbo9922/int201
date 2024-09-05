
function classifyNumber(num){
    if(num > 0){
      return 'positive';
    }else if (num < 0){
      return 'negative';
    }else {
      return 'zero';
    }

}
console.log(classifyNumber(5));
console.log(classifyNumber(-3));
console.log(classifyNumber(0));