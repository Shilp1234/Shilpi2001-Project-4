//<-----------What is OOP------------->
/*oop =>full form Object Oriented Programming.this id belongs to javascript ES6 version.OOP is basically 
methodology/style of coding.It helps to  using convert big code to small code. oop ke use se code more 
nodular and Resuable bna skte h taki hm ek bar code krke apne project ke ander bar bar use kr sake or isase
 code or organize ho jata h jiske helps se hm easily maintain kr skte h or easily debug  v kr skte h.

 it use mostly javascript framework req.js,angular.js,node.js etc....*/

 //------CLASS=> class ke ander jitne v methods h uska object bnakr use kr skte h
    // class hello{
    //     message(){
    //         console.log("HELLO EVERYONE")
    //     }
    //     sorry(){
    //         console.log("Sorry Everyone")
    //     }
    // }
    // let a=new hello();     //create object
    // a.message();
    // a.sorry();

//Three types og method in javascript:-
//1.constructor => when we create a object any class then automatic call ho jata h.

//2.Prototype => constructor ke help se kisi v variable ko value assign kiye h un methods ko hm calculate krna chahte h to prototype method ka use krte h.

//3.Static => 

class student{ 
    constructor(name,age){
        this .studentname=name;
        this .studentage=age;
        console.log("constructor Function")
    }
    hello(){                                                //prototype method
        console.log(`Hello ${ this.studentname} Your age is ${this .studentage}`)
    }
    static staticMethod(){
        console.log("Static method")
    }
}
let a=new student("Dharmendra Kumar",22);       //call constructor
let b=new student("Kunal Raj",2);  
a.studentname="shilpi kumari"
a.hello()
b.hello()
student.staticMethod()