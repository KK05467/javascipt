const accountId = 144553;
let accountEmail = "kk@google.com"
var accountPassword = "myPassword"
accountCity = "New York"
let accountState;

// accountId = 2

accountEmail = "kk@kk.com"
accountPassword = "newPassword"
accountCity = "Los Angeles"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);