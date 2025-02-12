
//We will use rest operator in functions in shopping cart specially like this:

//Rest operator:

//Example 01:
// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(200, 340, 500, 600));

//Example 02:
function calculateCartPrice1(val1, val2, ...num1) {
    return num1;
}
console.log( calculateCartPrice1(200, 300, 400, 800));


//object pass as a function 
//Example:

const user = {
    username: "rouf",
    price: 100,     //issue ab tb ata h jb prices hoti hain means zda prices...
}

function handelobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handelobject(user)

//i can also pass object directly instead of k m pehly banao then pass kro...
handelobject(
    {
        name: "rouf",
        price: 399
    }
)

//we can also pass an arrat like this:

const mynewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[2];
}

console.log(returnSecondValue(mynewArray));

//can also pass an array directly instead of k hum pehly aleda banaye and then pass krain...

console.log(returnSecondValue([200, 300, 400, 500]));
