//control flow statements

//if statement
let age = 18;
//syntax of if statement
//if (condition){
//    //code to be executed if condition is true
//}
if (age==18){
    console.log("You are an adult");
}

//if else statement
//syntax of if else statement
//if (condition){
//    //code to be executed if condition is true
//}else{
//    //code to be executed if condition is false
//}
if (age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}

//else if statement
//syntax of else if statement
// if (condition){
//code to be executed if condition true
//}
//else if (condition){
//code to be executed else if condition true
//}
// else {
    //code to be executed if and else if is false
    //}
if (age>18){
    console.log("You are an adult");
}
else if (age==18){
    console.log("You are just an adult");
}
else {
    console.log("You are a minor");
}

userLoggedIn=true
usedCreditCard=true
//logical operator
//&&
if (userLoggedIn && usedCreditCard){
    console.log('You can purchased!')
}
//or opertaor ||
const googleLogin=true
const emailLogin=false
if (googleLogin || emailLogin){
    console.log('user logged in')
}