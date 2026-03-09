//object
//An object is a collection of key–value pairs used to store related data and functionality.
//object create two ways 1. object literal 2. object constructor

//if we have add symbol in object then we have use [] notation
const first=Symbol('first')


//object literal
const obj1={
    name:'John',
    [first]:'test',
    age:30,
    city:'New York'
}
console.log(obj1)
//we can access values by diffrent way 
//accessing by key name using . dot notation
console.log(obj1.name)
//accessing by array 
console.log(obj1['name'])

//to access symbol value used to [] notaion not . dot notation
console.log(obj1[first])

obj1.name="tom"
console.log(obj1)
// Object.freeze(obj1) //after object freeze we cant change property
// obj1.name='titu'
// console.log(obj1)

//we can assgined fucntion to property
const greeting=function(){
      return "hello"
}
obj1.greet=greeting
console.log(obj1.greet())

//this
const greeting1=function (){
    return ` Hello ${this.name}`
}
obj1.greet1=greeting1
console.log(obj1.greet1()
)

//object constructor
// const obj2=new Object();
// obj2.name='Jane';
// obj2.age=25;
// obj2.city='Los Angeles';
// console.log(obj2)


