// array is  is container which can hold multiple value in a single variable
// array is a data type is object 
// It is an ordered collection of elements, where each element can be accessed by its index. 
// Arrays are commonly used to store and manipulate lists of data in programming languages.
// array is zero based indexing start from 0-n-1

// Declaring an array
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Accessing array element by index
console.log(arr1[0])

//modifiing array
arr1[0]=10;
console.log(arr1); // Output: [10, 2, 3, 4, 5]

//Push to add element to the end of the array
arr1.push(6);
console.log(arr1);


arr1.pop(); // removes the last element from the array
console.log(arr1); // Output: [10, 2, 3, 4, 5]

//unshift to add element to the beginning of the array
arr1.unshift(0);
console.log(arr1); // Output: [0, 10, 2, 3, 4, 5]

//shift to remove the first element from the array
arr1.shift();
console.log(arr1); // Output: [10, 2, 3, 4, 5]

//length of the array
console.log(arr1.length); // Output: 5

//indexOf to find the index of an element in the array
console.log(arr1.indexOf(3)); // Output: 2
console.log(arr1.includes(8)); // Output: false


const arr2=[6,7,8,9,10];
// arr1.push(arr2) 
// console.log(arr1) //Output[1,2,3,4,5,[6,7,8,9,10]]

//concat
const arr4=arr1.concat(arr2)
console.log(arr4)
/// Main differences between concat() and the spread operator (...)

// 1. Both concat() and spread do NOT modify the original arrays. They create a new array.

// 2. concat():
//    - Adds the elements of other arrays (or values) to the **end** of the array.
//    - Returns a **new array**.
//    - You cannot insert arrays in the middle of a new array directly using concat (without extra syntax).

// 3. Spread operator (...):
//    - Spreads the elements of an array wherever you place it inside a new array literal.
//    - Returns a **new array**.
//    - You can insert arrays or values **anywhere**, not just at the end.

const arr5=[...arr1,...arr2]
console.log(arr5) //Output: [10, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// make array form nother datatype liek string object or any
let name='john'
const new_arr=Array.from(name) //from string  //OutPut [ 'j', 'o', 'h', 'n' ]
const new_arr1=Array.from({"name":"john"})
const new_arr2=Array.from({0:'a',1:'b',2:'c',length:3}) //from object with length property and index as key 
                                                         // //Output [ 'a', 'b', 'c' ]
const new_arr3=Array.from(Object.keys({"name":"john"})) //from object keys  //Output [ 'name' ]
                                                         
console.log(new_arr)
console.log(new_arr1)// output [] we not tell js whether to make array from key or values
console.log(new_arr2) // output [ 'a', 'b', 'c' ] we tell js to make array from values and length of array is 3
console.log(new_arr3) // output [ 'name' ] we tell js to make array from keys of object


// Array.isArray() to check if a variable is an array
console.log(Array.isArray(arr1)); // Output: true
console.log(Array.isArray('name'))

// we cnan create ar for  string variable using of method
a='jj'
b='kk'
const arr6=Array.of(a,b) //Output [ 'jj', 'kk' ]
console.log(arr6)