// let number = [1, 2, 3, 5];
// const values = ['A', 'B', 'C'];

// number.push(6);
// values = number; //alias
// values.push("D");
// console.log(number);
// console.log(values);


const nums = [1, 2, 3];
//=== strictly equals, == weakly equals, = assignment
if (typeof nums === "object") console.log("nums is an object");
else console.log("num is not an object");


let num = 5;
let str = "Hello World";
//Backticks (template syntax)
console.log(`${str}, 'and', ${num * 2}`);

let a=1 //global
a++
function doSomething(){
    a='Hello' //function
    console.log(a)//'Hello'
}
{
    let a=true //block 
    console.log(a)//true
}
doSomething()
console.log(a)//2

function myFunction(){
    let studenName1 = 'Somchai';
    const studenName2 = 'Ball';
    console.log(studenName1);
    console.log(studenName2);
}
myFunction();