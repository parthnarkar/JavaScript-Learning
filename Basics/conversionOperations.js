let score = "33ab"

console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber); //It gives NaN --> Which means Not a Number(which is somewhat a little issue in javascript)

//NOTES:
//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0



let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//NOTES:
//1 => true; 0 => false
//"" => false
//"hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

//************************ OPERATIONS ********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //3 in the power of 2
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "parth"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//Don't write messy expressions, use brackets in the expression to make the code readable.

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2 //Don't write like this, this is correct but not readable

let gameCounter = 100
gameCounter++
console.log(gameCounter);
