//Example 03

//Part 01:(without storing value in variable)
function addone(num) {
    return num + 1;
}

console.log(addone(5))

//Part 02:
console.log(addone(5))

function addone(num) {
    return num + 1;
}


//Part 03:(by storing value in variable)

const addtwo = function(num) { 
    return num + 2;
}
console.log(addtwo(5))

//Part 04:(jb hum func ko call at top pr krwaty hain and func ko variable m store krty hain then ye error deta hai ye kehta hai k call at end kro tu yahan hoisting ka concetpt ata hai)
console.log(addtwo1(5))
const addtwo1 = function(num) { 
    return num + 2;
}