// Switch statement
// We use a switch statement when we need to evaluate multiple conditions.
// For example, if we have 12 months and want to display a month-wise message,
// using if-else chains would make the code messy.
// To make the code readable and scalable, we use a switch statement.

// Important: When we have multiple conditions, we should use `break` after each case
// to stop executing the next cases. 
// If we don't use `break`, and the first condition is true, the program executes
// all the following cases (except default). This is called "fall-through".

// Syntax
/*
switch (variable) {
    case value1:
        // Code to be executed if variable === value1
        break; // Stops execution of following cases
    case value2:
        // Code to be executed if variable === value2
        break;
    // ... more cases
    default:
        // Code to be executed if none of the cases match
        break; // optional in default
}
*/
let month = 5;
switch (month){
    case 1:
         console.log('january')
         break;
    case 2: 
         console.log('february')
         break;
    case 3:
        console.log('march')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;
    case 7:
        console.log("july")
        break;
    default:
        console.log('invalid data')
        break;
}