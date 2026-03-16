//this is special keyword which is used to refer current object
//this is used to access the properties of current object
//this is used to call the methods of current object

//arrow function does not have its own this keyword
//it inherits this keyword from its parent scope

//example of arrow function
name='sam'
let person = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    },
    sayHelloArrow: () => {
        console.log("Hello, my name is " + this.name);
    }
};

person.sayHello(); // Hello, my name is John
person.sayHelloArrow(); // Hello, my name is undefined

//in the above example, sayHello is a regular function and it has its own this keyword which refers to the person object
//sayHelloArrow is an arrow function and it does not have its own this keyword, it inherits this keyword from its parent scope which is the global scope in this case, so it refers to the global object and name is undefined in the global scope.


//ARROW FUNCTION
const addTwo=(a,b)=>{
    return a+b
}
console.log(addTwo(2,3)); //5

//ARROW FUNCTION WITH IMPLICIT RETURN
const addTwoImplicit=(a,b)=> a+b //we dont want to use return keyword and curly braces
console.log(addTwoImplicit(2,3)); //5

//when we return an object from an arrow function we need to wrap the object in parentheses
const personArrow=(firstName,lastName)=>({firstName,lastName})
console.log(personArrow("John","Doe")); //{firstName: "John", lastName: "Doe"}

//Immediately Invoked Function Expression (IIFE) with Arrow Function
((a,b)=>{
    console.log("The sum is: " + (a+b));
})(5,10); // The sum is: 15
//it is a function that is defined and immediately invoked.
//  It is useful for creating a new scope and avoiding polluting the global scope.