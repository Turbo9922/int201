let value = 2;
const num = 2;

// expression Arrow function
const fn = ()=>{
    console.log('Introduction to js')
}
//declaration
function doSomething(){
    console.log("do something")
}
//calling function
doSomething();
fn();

// settimeout เเบบรอเวลาค่อยทำงาน
setTimeout(()=>{
    console.log('Introduction to js')
}, 5000)
console.log('Good Bye')