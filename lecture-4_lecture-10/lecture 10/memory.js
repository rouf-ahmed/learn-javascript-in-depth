
//Stack(Primitive datatypes==> jo b memory m change kraingy copy milygi), Heap(Non-Primitive datatypes==>jo b memory m change kraingy oska origin milyga)

//Stack:

let myname = "Rouf"
let myanothername = myname
myanothername = "myrollno"

console.log(myname);            //output = Rouf
console.log(myanothername);     //output =myrollno

//Heap:

let userOne = {
    name: "Rouf",
    age: 19
}

let userTwo = userOne

userTwo.name = "myrollno"

console.log(userOne.name);      //output: myrollno
console.log(userTwo.name);      //output: myrollno