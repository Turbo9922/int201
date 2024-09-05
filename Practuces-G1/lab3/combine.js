function combineArrays(arr1,arr2){
  let arr = [...arr1,...arr2]; return arr;

}
console.log(combineArrays([1,2],[3,4])); // [1,2,3,4]
console.log(combineArrays(['a','b'],['c','d'])); // ['a','b','c','d']
console.log(combineArrays([],[1,2,3])); // [1,2,3]