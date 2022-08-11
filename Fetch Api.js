//----------------fetch()----------------//
// fetch method works on live server
//Syntax:-
    // fetch(file/URL).then(function(response){
    //         return response.data;
    // }).then(function(result){
    //     console.log(result);
    // }).catch(function(error){
    //     console.log(error)
    // })

    // fetch("javascript/readme.txt")
    // .then((response) => {console.log(response);
    // }).then((data) => {
    //     console.log(data)
    // })

//-------------insert code in server----------------//

    // fetch(file/URL,{
    //     method:"Post",->"Put"  "Delete" "Get"
    //     body:data -> Form Data/JSON Data/Text
    //     header:{
    //         'Content-Type':'application/json', // 'Content-Type':'application/x-www-form-urlencoded'
    //     },
    // });