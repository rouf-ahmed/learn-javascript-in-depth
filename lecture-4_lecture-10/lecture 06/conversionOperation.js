/*let score = 33; 
console.log(typeof score);     
        //or
console.log(typeof (score));*/ //output - number

//----------------------------------------------------------------------------------------
/*let score = "33abc"; 
console.log(typeof score);     
         //or
console.log(typeof (score));        // output-- string


let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // output number
console.log(valueInNumber);  */           // NaN ..not a number


//-----------------------------------------------------------------------------------------


/*let score = null; 
console.log(typeof score);     
         //or
console.log(typeof (score));        // output-- object


let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // o/p===> number
console.log(valueInNumber);  */           // // output 0

//----------------------------------------------------------------------------------------

/*let score = undefined; 
console.log(typeof score);     
         //or
console.log(typeof (score));        // output-- object


let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // o/p===> number
console.log(valueInNumber);     */        // output --- Nan


//----------------------------------------------------------------------------------------

/*let score = true; 
console.log(typeof score);          // o/p-----boolean
         //or
console.log(typeof (score));          // o/p--- boolean


let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // o/p===> number
console.log(valueInNumber);    */         //  o/p --1 ...if false ythen 00

//`````````````````````````````````````````````````````````````````````````````````````````

/* notes:--
i) "33" => 33
ii)"33abc" => Nan
iii) true => 1, false => 0
*/

//-----------------------------------------------------------------------------------------
/*let isLoggedIn = 1;


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);      */   // true o/p

//.........................................................................................

/*let isLoggedIn = ""


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);         // o/p----false */

// ------------------------------------------------------------

/*let isLoggedIn = "Rouf"


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);         // o/p----false */


/* Notes:--- */
// 1 => true
// 0 => false
// "" => false
// "Rouf" => true

let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// o/p--- 33, string

//-----------------------------------------------------------------------------------------

