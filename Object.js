//=========DESTRUCTURING OBJECT==================
// let user ={
//     name:"Shilpi Kumari",
//     age:21,
//     city:"siwan"
// }
//console.log(user)     //old version

// let {name,age,city}=user        //Object Destructuring
// let {name:n,age:a,city:c}=user     //using alice name code small krne ke liye
// console.log(n)
// console.log(name)
// console.log(age)
// console.log(city)

//----------------OBJECT LITERAL----------------//
// let s = "students name";

    // var obj ={
    //     //[s]:"Shilpi kumari"
    //     [s + "name"]:"Shilpi kumari",
    //     course:"BCA",
    //     detail:function(){
    //         return `${this.studentname} is student of ${this.course}`
    //     }
    // }
    // console.log(obj)
    // console.log(obj.detail)

    // let s = "students";
    // var obj ={
    //     //[s]:"Shilpi kumari"
    //     [s + "name"]:"Shilpi kumari",
    //     course:"BCA",
    //     detail(){
    //         return `${this.studentsname} is student of ${this.course}`
    //     }
    // }
    // console.log(obj.detail)
    // console.log(obj['detail']())

    //RETURNING OBJECT USING FUNCTION

    let fname="Priyal"
    let lname="Kumari"
    let course="MCA"

    function student(fname,lname,course){
        let fullName=fname + " " + lname
        return {fullName,course}
    }
    console.log(student(fname,lname,course))      //all property
    // let b=student(fname,lname,course)
    // console.log(b.fullName)   //seperate property dekhne ke liye