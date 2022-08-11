//Array => An Array  is special variable,which can hold the more than one value.and  you can access the values by referring to an index number.

//WHY ARRAY IS USED?
// List of value ko one variable ke ander store krne ke liye user krte h.
//let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

//=====================CREATE ARRAY EXAMPLE==============

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

 //let arr =["shilpi","advik","aditi","kunal",6]
 //console.log(arr)            //all array of value print
// console.log(arr[2])         //to ptint index of value
//  arr[1]="Sonam"          // add value index 1
//  console.log(arr)
//console.log(arr.length)           //check array length


//---------- WE CAN CHECK  IS IT ARRAY /VARIABLE-------------

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//const fruits="Banana";
//console.log(Array.isArray(fruits))

//<-------------DESTRUCTRING ARRAY----------------->

// let user=["Advik Raj",2,"Bihar",["Male",30000]];     //nested array
// let [name,age,city,[gender,salary]]=user;

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(gender)
// console.log(salary)

//let user=["Advik Raj",2,"Bihar"];
// function user([name,age=20,city]) {
//     console.log(name)
//     console.log(age)
//     console.log(city)
// }

//user(["Advik Raj",2,"Bihar"])

// function user() {
//     return ["Advik Raj",2,"Bihar"]
// }

// let [name,age,city]=user()
// console.log(city)
