function calculater(op, num1, num2){
    return op(num1, num2);
 
 
 
}
 
const sum = (num1, num2) => {
    return num1 + num2 ;
}
 
const subtract = (num1, num2) => {
    return num1 - num2;
 
}
 
const randomnumber = () => {
    const randNum = Math.floor(Math.random() * 10);
    return randNum;
}
 
console.log(randomnumber());