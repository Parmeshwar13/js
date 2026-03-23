const arr=[1,2,3,4,5];

//filter method
//method is used to create a new array with all elements that pass the test implemented by the provided function
//syntax
// array.filter(function(currentValue,index,array){
//     // code to be executed
// })
const even=arr.filter(function (item){
    return item%2==0
})
console.log(even)

const myOddArr=[]
arr.forEach((item)=> {if (item%2 !=0){
    myOddArr.push(item)}
})
console.log(myOddArr)

const Books=[{title:'The Great Gatsby',author:'F. Scott Fitzgerald',year:1925,genre:'Fiction'},
{title:'To Kill a Mockingbird',author:'Harper Lee',year:1960,genre:'Fiction'},                  
{title:'1984',author:'George Orwell',year:1949,genre:'Dystopian'},
{title:'The Catcher in the Rye',author:'J.D. Salinger',year:1951,genre:'Fiction'},
{title:'The Lord of the Rings',author:'J.R.R. Tolkien',year:1954,genre:'Fantasy'},
{title:'The Hobbit',author:'J.R.R. Tolkien',year:1937,genre:'Fantasy'},
{title:'Moby',author:'Herman Melville',year:1851,genre:'Adventure'},
{title:'War and Peace',author:'Leo Tolstoy',year:1869,genre:'Historical Fiction'},
{title:'Pride and Prejudice',author:'Jane Austen',year:1813,genre:'Romance'}]

const mybook=Books.filter((item)=>item.genre=='Fiction')
console.log(mybook)


//map method
//method is used to create a new array with the results of calling a provided function on every element in the calling array
//syntax
// array.map(function(currentValue,index,array){
//     // code to be executed
// })
const mapbook=Books.map(function(books){
    return books
})
console.log(mapbook)

const mybookname=Books.map((item)=>item.title)
console.log(mybookname)

const mybookauthor=Books.map((item)=>item.author)
console.log(mybookauthor)

const mybookyear=Books.map((item)=>item.year)
console.log(mybookyear)

//chaining of filter and map method
//chaining is a technique where we can call multiple methods on the same object in a single line of code
const mubook1=Books.filter((item)=>item.genre=="Fiction").map((item)=>item.author)
console.log(mubook1)

//reduce method
//method is used to execute a reducer function on each element of the array, resulting in a single output value
//syntax
// array.reduce(function(accumulator,currentValue,index,array){
//     // code to be executed
// },initialValue)
const  secondarySchool=[{
    name:'John',
    marathi:80,
    english:90,
    math:85
},
{
    name:'Jane',
    marathi:75,
    english:85,
    math:80
},
{
    name:'Doe',
    marathi:90,
    english:95,
    math:92 
}]

const totalMarks=secondarySchool.reduce((acc,item)=>{
    return acc+item.marathi+item.english+item.math
},0)
console.log(totalMarks)
const mapmark=secondarySchool.map((item)=>{ 
    return{
        name: item.name,
        total: item.marathi + item.english + item.math
    }
})
console.log(mapmark)

const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pants", price: 1000, quantity: 1 },
  { name: "Shoes", price: 2000, quantity: 1 }
];
const totalPrice=cart.reduce((acc,item)=>{return acc+item.price},0)
console.log(totalPrice)