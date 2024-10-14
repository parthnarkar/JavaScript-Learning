/*
    Primitive:
        String, Number, Boolean, Null(Empty), Undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 200.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol
const id = Symbol('234')
const another = Symbol('234')

console.log(id === another);


/*
    Reference Type(Non-Primitive):
        Array, Objects, Functions
*/

//Array 
const arr = ["parth", "narkar"]

//Objects
let myObj = {
    name: "parth",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}
