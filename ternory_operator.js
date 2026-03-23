// nullish coeslation operator(??)
//in javaScript it used  to provide default value  whne left side value is null or undefined
//syntax
// value??defaultValue
let val1;
// val1=null??10
val1=undefined??12
console.log(val1)



//ternory operator
//it is a short hand for if else statement
//syntax
// condition ? expressionIfTrue : expressionIfFalse
let age=18;
let test=age>=18?console.log('you are eligible to vote'):console.log('you are not eligible')
