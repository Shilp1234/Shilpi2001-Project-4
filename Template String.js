//------------------Template String/Literal--------------//
//BEFORE COMING TEMPLATE LITERAL 
//    var user="shilpi kumari";
//    var greet="Hello "+ user ;
//    console.log(greet)

//COMING TEMPLATE
    // var user="shilpi kumari"; 
    // let marks=460
    // let hello=`Hello ${user}... Your Marks is ${marks}`
    // let hello=`Hello "${user}" Your 'Marks' is ${marks}`  //when you seen our code double cort
    // console.log(hello)
    
    let firstName="SHILPI"
    let lastName="KUMARI"

    function fullName(firstName,lastName){
        return `${firstName} ${lastName}`
    }

     let hello=`Hello ${fullName(firstName,lastName)}`
     console.log(hello)



