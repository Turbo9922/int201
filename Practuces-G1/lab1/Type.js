function detailedType(values){
    if(values === null) 
        return 'null';
    if(Array.isArray(values))
        return 'array';
    return typeof values;
}
console.log(detailedType('hello'));
console.log(detailedType(123));
console.log(detailedType(true));
console.log(detailedType({})); //object
console.log(detailedType([])); //array
console.log(detailedType(null)); // null
console.log(detailedType(function () {}));
console.log(detailedType(undefined));
console.log(detailedType(Symbol));
