//-------------SPREAD OPERATOR-----------------//
// Spread Operator is used to unpack elememts of an array and very usefull to add two array of elements
//Syntax:- 
    // let arr=[20,30,40]
    // sum("Hello World",...arr);

    // let arr1=[20,30,40]
    // let arr2=[50,60,70] 
    // var arr3=[4,...arr1,...arr2,89]
    // console.log(arr3)

//------------------OBJECT SPREAD OPERATOR---------------------//
// Object spread operator can be used to merge objects into one
    var obj1={
        name:"shilpi kumari",
        course:"BCA",
        age:22
    }
    var obj2={
        Name:"Dharmendra kumar",
        Course:"BCA",
        Age:22
    }
    var obj3={...obj1,...obj2}
    console.log(obj3)