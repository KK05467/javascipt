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

function chai(){

    let username = "keertan"
    console.log(this.username);
}

chai()


//it signifies that this keyword can only be used in the scope of object not function

