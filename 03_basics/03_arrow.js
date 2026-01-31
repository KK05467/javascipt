const user = {
    username: "keertan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"

// user.welcomeMessage()

//console.log(this);



//whenever you are referring your current context (here, the opening braces of user and closing braces of user), we user "this" keyword 

// function chai(){

//     let username = "keertan"
//     console.log(this.username);
// }

// chai()


//it signifies that this keyword can only be used in the scope of object not function

// const chai = function () {
//     let username = "keertan"
//     console.log(this.username);
// }

const chai = () => {
    let username = "keertan"
    console.log(this);
}

chai()


const addTwo = (num1, num2) => {
    return num1 + num2
}

//The above can also be written as

// const addTwonum = (num1, num2) => num1 + num2  // implicit return

const addTwonum = (num1, num2) => (num1 + num2)  //implicit return
//If we use {num1.....} instead of (num1.....) then we have to use return keyword


//Explicit return is when we use return keyword

// console.log(addTwo(3,4))

// console.log(addTwonum(2,5))


// const myArray = [2, 4, 5, 3, 8]

// myArray.forEach()


