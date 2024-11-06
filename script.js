//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console
/* log into the console: Hello world! */

//! Write code here

//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

//! Write code here

//* Assignment 3: Objects
/* Objects can contain a lot of information and any type of data

Object syntax:

const objectName = {
key: "value",
key2: "value2",
}


Create an object that has the following information about a imaginary person:
firstName, lastName, occupation, age (this should be the key names in the object)

console log the following values from the object (can be in the same console log if you prefer):

occupation and age

*/

//! Write code here

//* Assignment 4: Arrays

/* Arrays can hold a lot of data in indexes, but does not have key referances like in objects which makes them harder to refer to

Array syntax:

const arrayName = ["value", "value", "value"]


Create an array for 5 different animals. console log the third ELEMENT (remember there is a difference between element position and index position in an array)

*/

//! Write code here

//* Assignment 5: Conditionals

/* Conditionals makes it possible to run different code blocks depending on conditions

Example:

const value = 5
const message;

if (value === 5) {
    run this code if value is 5
    message = "value is 5"
} else if (value < 5) {
    run this code if value is less then 5
    message = "value less 5"
} else if (value > 5) {
    run this code if value is more then 5
    message = "value more 5"
} else {
    run this code if none of the code blocks above has been executed.
    message = "value is not a number"
}

console.log(message)


Create a similar conditional for randomNumber to check if:
number is 8, number is less then 8 and number is more than 8. At the end (else) check if the number is not a number at all.

*/

const randomNum = Math.ceil(Math.random()*10)

//! Write code here