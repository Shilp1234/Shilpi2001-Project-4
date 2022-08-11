//----------------REST OPERATOR-----------------//
//Rest operator convert one of multiple value
//Syntax:- 

// function sum(){
//     console.log(arguments)
// }
// sum(20,30,40)
// sum(70,60)

// function sum(){
//     console.log(arguments)
//     let sum=0;
//     for(let i in arguments){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
// sum("shilpi",20,30,40)       // convert all number string the place of addition
//  sum(70,60,50)


//USING REST OPERATOR

function sum(name,course,...args){         //remaining value ke liye ...args
    console.log(arguments)
    console.log(`Hello ${name} of ${course} :`)
    let sum=0;
    for(let i in args){
        sum+=args[i]
    }
    console.log(sum) 
}
sum("shilpi","BCA",20,30,40)