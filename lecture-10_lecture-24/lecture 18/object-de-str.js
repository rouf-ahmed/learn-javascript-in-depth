
//Desctructuring of arrays and objects

//Here I will discuss destructuring of objects:

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//it will give right output but its not recommendable
console.log(course.courseInstructor); //output = hitesh

//deestructuring two ways:
//1---way---its recommendable:because here code is clean but i can make further more readable...

//course object ko aleda sy store krdo and bracket m jisko print krwana wo likhdo...
const { courseInstructor } = course;
console.log(courseInstructor);     //output = hitesh

//2---way---its perfect and make code clean...

const {courseInstructor:instructor} = course;
console.log(instructor);


//Destructuring in react::: in this form:

//can do this by using props or without props...

// const navbar = ({props.company}) => {

// }

// navbar(company = "rouf")


// const navbar = ({company}) => {

// }

// navbar(company = "rouf")


//API'S (apna kam dosry pr dal dena let say  login on google and meri headache ni h k google verify kesy kryga mjy bs output sy grz hai...)
//pehly API'S XML form m hoti thien lkin ab json format mai hoti hain:

//json structure:(simply javascript notation...)

//API'S in objects form:

// {
//     "names": "rouf",
//     "coursenames": "js in urdu",
//     "prices": "free"
// }

//API'S in array form:


    [
        {
            "names": "rouf",
            "coursenames": "js in urdu",
            "prices": "free"
        },
        {
            "names": "sunu",
            "coursenames": "python in urdu",
            "prices": "paid"
        }
    ]



    
