const number = [12, 13, 14, 15, 16, 17, 1118];
console.log(number);
console.log(...number);
// const max= Math.max(123,1456,356,23,45,78,90)
const max = Math.max(...number);
console.log(max);

// const first = [1,2,3,4,5,6,7,8,9];
// const second = first;
// second.push(10);
// console.log(first)


const first = [1,2,3,4,5,6,7,8,9];
const second = [...first];
second.push(10);
console.log("first",first)
console.log("second",second)



// console.log(second)
