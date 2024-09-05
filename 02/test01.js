function echo(str){
    return str;
}
//function is the first class citizen
//assign function echo to variable "a"
let a = echo;
console.log(typeof a);

let b = echo('Hello World');
console.log(typeof b);


console.log(a('Practices'));
// console.log(b('Practices'));// throw error b not function


//1.2 passing function
//formatString is a higher order function
function formatString(str,op){
    return op(str);
}
function toUpper(str){
    return str.toUpperCase();
}
function toLower(str){
    return str.toLowerCase();
}

console.log(formatString('DO your best',toUpper));
console.log(formatString("Do your best",toLower));

//1.3 return function as output
function sayGoodBye(){
    return 'GoodBye';
}
function doSomething(){
    return sayGoodBye;
}
let doIt = doSomething()
console.log(doIt());

//1.3
function x(op){
    return op;
}
let m=x(toLower);
console.log(typeof m);//function
console.log(m('GOODBYE'));//goodbye

