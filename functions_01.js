//functions
//declaration
const addtwo=function(num1,num2){

     console.log(num1+num2)

}
// addtwo(2,3)
const result=addtwo(2,3) //here 2,3 `are arguments and num1,num2 are parameters
console.log(result) //undefined because the function does not return anything

function loginuser(username){
    return `welcome ${username}`
}
loginuser('john') //welcome john
// console.log(loginuser('john')) //welcome john
// console.log(loginuser()) //welcome undefined

//rest operator
 const test=function(num){ //without rest operator we get only the first argument
     console.log(num)
 }
 //with rest operator we can get all the arguments in an array
 const test1=function(...num){
     console.log(num)
 }   
 const test2=function(num1,...num){
     console.log(num) //[2, 3, 4, 5]
 }
 test(1,2,3,4,5) //1
 test1(1,2,3,4,5) // [1, 2, 3, 4, 5]
 test2(1,2,3,4,5) // [2, 3, 4, 5]
 //we pass object as an argument to a function
 const user={
     name:'John',
     age:30,
     isAdmin:false
 }
 const loginuser1=function(anyobject){
     console.log(`welcome ${anyobject.name} you are ${anyobject.age}
     years old and you are ${anyobject.isAdmin?'an admin':'not an admin'}`)
 }
 loginuser1(user) //welcome John you are 30 years old and you are an admin

 //we can also pass array as an argument to a function
 const numbers=[1,2,3,4,5]
 const sum=function(arr){
     return arr[1]
     }
console.log(sum(numbers)) //2