const myobject = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in myobject){
    console.log(`${key}:${myobject[key]}`)
}

//foreach method
//method is used to execute a function for each element in an array
//syntax
// array.forEach(function(currentValue,index,array){
//     // code to be executed
// })
const arr=[1,2,3,4,5];
arr.forEach(function(num){ //it is a callback fucntion so we dont need to pass name to function
    console.log(num)
})
const myarr=['apple','banana','orange'];
myarr.forEach(function(num){
    console.log(num) //it will print each element of the array
})
myarr.forEach(function(item,index,myarr){
    console.log(`index:${index} value:${item} array:${myarr}`)
})

const mycoding=[{langname:'javascript',popularity:100},{langname:'python',popularity:90},{langname:'java',popularity:80}]
mycoding.forEach((item)=>{
    console.log(item.langname,'d')
    console.log(item.popularity)
})