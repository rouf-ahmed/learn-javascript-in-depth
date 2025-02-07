"use strict"; //treat all JS code as newer version 

// alert ( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
    3       //code readability should be high .....console.log("3 + 3")
);

console.log("Rouf");  


let name = "Rouf"
let age = 19
let isLoggedIn =  false
let state;




//NOTES:

// number => 2 to power 53 // example let age = 18
// bigint
// string = " " //in double "
// boolean => true/false (1&0) // example let isLoggedIn = false/true
// null => standalone value 
// undefined => it means value is not assigned till now... //example of undefined is let state;(value is not defined so it will be undefined)
// symbol => uniqueness(mostly used in react)


//Object 
console.log(typeof "Rouf");                 //typeof-string
console.log(typeof age);                    //typeof-number

//If age is not defined like this; age; then output will be undefined.. if i will console.log(typeof age)..
console.log(typeof null);                   // nulltypeof-object