function sayMyName () {
    console.log("K")
    console.log("E")
    console.log("E")
    console.log("R")
    console.log("T")
    console.log("A")
    console.log("N")
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,"4")

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    // console.log("Keertan")
    return number1 + number2
}

const result = addTwoNumbers(3,5)

console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Keertan"))

//If no attribute is passed to the parameters then the result is undefined not null

function calculateCarPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCarPrice(200, 400, 500))

// ...  is known as rest operator and spread operator

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))