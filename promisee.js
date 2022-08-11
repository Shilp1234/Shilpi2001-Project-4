//<------------PROMISE---------------->
function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("Fetching data,please wait.....")
        setTimeout(() =>{
            if(complete){
                resolve("I am successfull.");
            }else{
                reject("I am failled")
            }
        },3000)
    });
 }
// // let onfulfilled=(result) => {
// //     console.log(result);
// // }
// // let onRejection=(error) => {
// //     console.log(error);
// // }

// prom(true).then((result)=>{
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// })

//=======================================================================================
// function prom(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data,please wait.....")
//         var c= a / b;
//         setTimeout(() =>{
//             if(c){
//                 resolve(`Your answer : ${c}`);
//             }else{
//                 reject("Failled to calculate")
//             }
//         },2000)
//     });
// }
// prom(9,2).then((result)=>{
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// })

//=======================Promise.all()====================
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The first promise has resolved')
//         resolve(10);
//     },1*1000)
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The second promise has resolved')
//         resolve("20");
//     },2*1000)
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The third promise has resolved')
//         resolve(30);
//     },3*1000)
// })
// var total=0;
// Promise.all([p1,p2,p3]).then((result)=>{
//     for(var i in result){
//         total +=result[i];
//     }
//     console.log(`Results: ${result}`)
//     console.log(`Total: ${total}`)
// }).catch((error)=>{
//     console.log(`Error: ${error}`);
// });

//================Short code==================