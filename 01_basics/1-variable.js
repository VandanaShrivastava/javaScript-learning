// Here going to learn how to save the value in memory using variables
// ------------------------------------------------------------------
// Saving constant variable value, which cannot be changed
const accountId = "123"
// give name
let customerName = "Vandana Barot"
// age
var age = 30
// email id
let emailId = "vandana@.com"
// password
let password = "12345"

/*
we can either use console.log to print one at time or we can use another function console.table
*/

console.table([accountId,customerName,age,emailId,password])

// change the value of var and let
customerName = "Vandana Shrivastava"
age = 31
emailId = "vandanas.com"
password = "457"
// print it
console.table([customerName,age,emailId,password])
//  let change the constant value

/*
-- cannot change  const 
accountId = "234"
console.log(accountId);
-- diff btw var and let
var does not  support block scope and functional scope
*/
