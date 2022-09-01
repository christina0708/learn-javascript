// type conversions
/*implicit conversion:
explicit conversion: */

console.log(true + "3")
console.log("christiina" + "hriatpuii")
console.log("3" + "3") //number kh string ang in a la a, a in zawm
console.log("3" * "3") // add ah chiah a work lo 
console.log(3 + 3) //number kh a in belh thy ta ani.
console.log("5" - null)
console.log("5" - true) //true hi 1 ag anih avang in 5-1 ani ang
console.log("5" - false) //false hi 0 ag anih avang in 5-1 ani ang
console.log(5 + undefined)
console.log(Number(false))
console.log(Number(""))
console.log(parseInt("5"))
console.log(parseFloat("3.14"))

console.log("convertiong other datatype to string")
//converting other datatype to string
console.log(String(500))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))
console.log("two sring method:")
console.log((500).toString()) // will not work on null and undefined
console.log(Boolean(10)) // null undefined o "" NaN lo ho zawng kha false ani ang

// equality: ==(allows coercion) and ===(doed not allow coercion)
const var1 = 10
const var2 = " 10"
console.log(var1==var2) // js coerces the values to the same type---
/*string 10 is converted into numeric 10 automatically and then compared
both constants would be of the same value and hence the result is true*/
console.log(var1===var2)
/*both constant must be of the same type and will not convert implicitly
 since a number is different from a string type false*/

//condition statement: if- else- else if- switch


const num1= 0
if(num1 > 0){
    console.log("positive")
 } else if (num1<0){
    console.log("negative")
 }
else {
    console.log("zero")
}

// switch
console.log("switch:::::")
const color = "red"
switch(color) {
    case "red" :
        console.log("is red")
        break
        case "blue" :
        console.log("is blue")
        break
        case "green" :
        console.log("is green")
        break
        default:
            console.log("not available")
}
 //looping : for loop

console.log("looping code ::::::")
console.log("for loop ::::::")
// for loop
/*for (initializer; condition; final-expression) {}
intitializer- run before starting the loop
condition-checked to see if the loop is stop
final expression-run each time the loop has gone through an iteration
{} contain a block of code which will run each time the  loop iterate*/

for(let i=1; i<=5; i++) {
    console.log("iteration number" + i)
}

console.log("while loop::::::")
//initializer while (condition) //code to run then final-expression

let k= 1
while (k <= 5) {
    console.log("iteration number" + k)
    k++
}

console.log("do while loop::::::")
//initializer do { conde to run then final-expression} while (condition)

let g= 1
do{
    console.log("iteration number" + g)
    g++
} while(g<=5)

console.log("for of loop::::::")
//for (const item of array) { code to run}

const numArray = [1,2,3,4]
for(const num of numArray) {
    console.log("iteration number" + num)
}

// function
console.log("function:::::")
//function name(parameter1, parameter2, parameter3) { code to be executed}
function greet(user) {
    console.log("good" + user)
}
greet("christina")
greet("christy")

function add(a, b) {
    return a+b
}
const sum = add(25, 25)
console.log(sum)

//arrow function
console.log("arrow function")

function dda(a, b) {
    return a+b
}
const arrowSum = (a,b) => {
return a+b
}
const sume = arrowSum(25, 25)
console.log(sume)

//scope
console.log("block scope::::::")
//variable declared inside the curly box cannot be access from outside the block
const myNum =100
if(true){
    const myName = " crunchy"
    console.log(myName)
    console.log(myNum)
}
//console.log(myName) hi a pawn a awm hian a diklo

console.log("function scope:::::")
//variable declared inside the funcition are not accessible from outside the funciton
function testFn() {
    const myName = "hriatpuii"
    console.log(myName)
    console.log(myNum)
}
testFn()

console.log("global scope:::::")
//variable are accessible both inside a block as well as a funciton
// will not overwrite block or function scoped variables
