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

console.log(loginUserMessage("Keertan"))

//If no attribute is passed to the parameters then the result is undefined not null

