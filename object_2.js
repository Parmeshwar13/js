const user = new Object();
user.name = 'John';
user.age = 30;
user.isAdmin = true;

console.log(user);
obj1={
    name:'John',
    age:30,}
obj2={
    name:'mohan',
    age:30,}
const obj3=Object.assign({},obj1,obj2) // object1 is source and object2 is target it will copy the properties of object2 to object1

console.log(obj3);
console.log(obj1===obj2);

const obj4={...obj1,...obj2} // spread operator is used to copy the properties of object1 and object2 to a new object

console.log(obj4);

const obj5=[
    {
    "id":1,
    "name":"tillu"},
{
    "id":2,
    "name":"millu"
}
]
console.log(obj5[1].name)
console.log(Object.keys(user)); // returns an array of the keys of the user object
console.log(Object.values(user)); // returns an array of the values of the user object
console.log(Object.entries(user)); // returns an array of the key-value pairs of the user object
console.log(Object.hasOwn(user,'name')); // returns true if the user object has the property 'name'
