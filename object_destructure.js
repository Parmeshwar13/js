//object destructure is a way to extract values from an object and assign them to variables
const user={
    name:'John',
    age:30,
    isAdmin:true
}
console.log(user.name); //synthetic sugar
const {name}=user; // object destructure
const {age:userAge}=user; // object destructure with alias
console.log(name);
console.log(userAge);

//eg in react we use object destructure to extract values from props
const navbar=({company,position})=>{
    console.log(`company:${company},position:${position}`);

}
//without object destructure
const navbar1=(props)=>{
    console.log(`company:${props.company},position:${props.position}`);

}
navbar({company:'google',position:'software engineer'})
navbar1({company:'google',position:'software engineer'})