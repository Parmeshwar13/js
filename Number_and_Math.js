//When we call number as  a function it return a primitive number but 
// when we call number as a constructor it return a Number object
const number=new Number(123);
console.log(number); // [Number: 123] retrieves the Number object
console.log(typeof number); // object
console.log(number.valueOf()); // returns the primitive value of the Number object, which is 123
console.log(typeof number.valueOf()); // number

const num=123;
console.log(num); // 123
console.log(typeof num); // number         
// ToPrescion is a method that format a  number to a specified Length  used in scientific notation if necessary
const num1=123.4567
console.log(num1.toPrecision(1));
console.log(num1.toPrecision(3))

// Tofixed
// toFixed is method to format number to fixed digit after the decimal point
const num2=123.4567;
console.log(num2.toFixed(0)); // 123
console.log(num2.toFixed(2)); // 123.46
console.log(num2.toFixed(4)); // 123.4567

//toLocaleString
// tolocaleStirng is a method to format number  date ,currency according to locale region
const num3=1234567.89;
console.log(num3.toLocaleString('en-US'));
console.log(num3.toLocaleString('hi-IN'));
