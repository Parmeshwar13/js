//Truthy
//in javaScript values are called truthy if it evaluate true in bollena context
//'s', 
//'true'
//'  ' empty string with space is also truthy value
//[]
//{}
//true
//function(){}



//falsy
//in javascript values are called falsy value it it evaluate fale in boolean context

falsyValue=[0,0n,false,NaN,null,undefined,'']
const userEmail=[]
if (userEmail.length===0){
    console.log('array is empty')

}

const data={}
if (Object.keys(data).length===0){
    console.log("obj is empty")
}