// Simple Comparisons
// console.log(2 > 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 == 3);

console.log("2" > 3);
console.log("02" > 3);
//NOTE: Try to do comparsion with same data types

/*
    the reason is that an equality check == and comparison > < >= works differently.
    comparisons convert null to a number, treating it as 0. (see in 3rd statement below)
*/
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === : Strict check(use triple equal to) - It strictly checks the value as well as the datatype
console.log("2" === 2);