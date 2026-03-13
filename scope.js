//Scope is region of code where variables are defined and can be accessed. In JavaScript, there are three types of scope: global scope, function scope, and block scope.


// var globalvar='300'; //global scope
// let blockvar='i am block variable'; //block scope
// const blockconst='i am block constant'; //block scope



// if (true){
//     var globalvar='400'; //global scope
// let blockvar='i am block variable'; //block scope
// const blockconst='i am block constant'; //block scope

// }
function test(){
}
var globalvar='500'; //global scope}

console.log(globalvar); 
// console.log(blockvar); //undefined because blockvar is defined inside the function
// console.log(blockconst); //undefined because blockconst is defined inside the function