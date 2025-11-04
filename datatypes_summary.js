// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamically typed language

const name = "Keertan"; // String

const x = 3; // Number

const y = true;  // Boolean

const z = null; //null

let a; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId); //false

const bigNumber = 6546584894121065468n; // BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ['shaktiman', 'naagraj', 'doga']; //array
let myObj = {           //object
    name: "keertan",
    age: 20,

}

const myFunction = function() {        //function
    //console.log("Hello World");
}


//console.log(typeof z);   //datatype of null => object

//console.log(typeof myFunction); //object-function




// ********************************************************
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "keertan@google.com"

console.log(userOne.email);
console.log(userTwo.email);