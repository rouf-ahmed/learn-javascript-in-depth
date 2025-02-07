///////COMMON COMPARISON OPERATORS ARE///////////////

console.log(2 > 1);         // output = true
console.log(2 >= 1);        // output = true
console.log(2 < 1);         // output = false
console.log(2 == 1);        // output = false
console.log(2 != 1);        // output =true

//''''''''''''''''''''''''BASICS''''''''''''''''''''''''''''''''''''''//
let str1 = "hello"
let str2 = "Rouf"

let str3 = str1 + str2
console.log(str3);

//Now.........................................

console.log("1" + 2);           // 12
console.log(1 + "2");           // 12 
console.log("1" + 2 + 2);       // 122
console.log(1 + 2 + "2");   // 32

// console.log( 3+4*5%4);      // dont use this type of value ..use ((3+4)*5%4)

//now'''''''

console.log("02">1);       // output = true

//=====================AVOID THESE CONVERSIONS(MAKE CODE CLEAN)==================
//All comparisons are behave differently...
//null convert it into 0..
console.log(null > 0);      // 0 > 0 -> output = false
console.log(null == 0);     // 0 == 0 -> output = false (comparison operator(==) behave different from equality(=) operator)
console.log(null >= 0);     // 0 >= 0 -> output = true

//In undefined case it will return false:
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

// console.log("2" = 2);       // does not exist give error message

console.log("2" == 2);      //output = true

console.log("2" === 2);     // output = false; (because =, ==, === all of these behave differently)



///===============Null ka mtlb 0 ni h empty ni h null ka mtlb h totally empty==========




