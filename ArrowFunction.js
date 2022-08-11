//----------------ARROW FUNCTION-------------------//
// BEFORE COMING ARROW FUNCTION
//   1.  function hello(){
//         console.log("Hello")
//     }
//     hello();


//    let hello=function (name){
//         return `Hello and Welcome ${name}`
//     }
//     console.log(hello("Advik Raj"))

//ARROW FUCNTION SYNTAX
//  let hello=() => console.log("Good Morning Everyone");
//     hello();

let welcome = (name, age) => {
    return `Hello and Welcome ${name} - ${age}`
}
console.log(welcome("Advik Raj", 2))
console.log(typeof welcome)
