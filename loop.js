//for
for (let i=0 ;i<=10; i++){
    console.log(i)
}

// for (let i=0; i<=10; i++){
//     console.log(`Outer loop Value: ${i}`)
//     for (j=0; j<=10; j++){
//         console.log(`inner loop value${j} and outer loop ${i}`)
//     }
// }

//table from 1 to 10

// for (let i=1; i<=10; i++){
//     console.log(`Table:${i}`)
//     for (let j =1; j<=10;j++){
//         console.log(`${i} * ${j}=`,i*j)
//     }
// }

//break and continue

for (let i=1; i<=10;i++){
    if(i==5){
        console.log("5 numvber found")
        break;
    }
    console.log(`${i}`)
}
//continue
for (let i=1; i<=10;i++){
    if (i==5){
        console.log('hello')
        continue;
    }
    console.log(`${i}`)
}