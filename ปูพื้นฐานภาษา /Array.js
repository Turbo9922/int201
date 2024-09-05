// const numbers =[1,2,3,4,5];
// numbers.forEach(function(numbers) {
//     console.log(numbers);
// });

// const number = [1,2,3,4,5];
// const doubled = number.map(function(number){
//     return number *2;

// })
// console.log(doubled);

const number = [1,2,3,4,5];
const even = number.filter(function(number){
    return number % 2 ===0 ;
})
console.log(even);

