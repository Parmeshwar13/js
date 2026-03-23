//for of 
//syntax
// for(iterator of object){
//     // code to be executed
// }
const arr=[1,2,3,4,5];
for (let num of arr){
    console.log(num)
}
//map method
const map=new Map();
// set method is used to add key value pair to map
map.set('name','john');
map.set('age',30);
map.set('city','new york');
console.log(map)
// get method is used to retrieve value from map using key
// console.log(map.get('name'))
// console.log(map.get('age'))
// console.log(map.get('city'))



for (let [key,value] of map){
    console.log(value)
}


