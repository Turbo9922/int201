const array1 = ["apple", "banana", "cherry"];
const array2 = ["dog", "cat"];
const array3 = ["red", "blue", "green", "yellow"];

let totalLength = 0;
const arrays = [array1, array2, array3];

for (const arr of arrays) {
  totalLength += arr.length;
}

console.log(totalLength); // Output: จำนวนองค์ประกอบทั้งหมด: 9
