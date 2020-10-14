// import additionFunction from './sum'

// Importing a named and a default features 
import oddOnly, { sumValues } from './sum'
// Importing an entire module
import * as ops from './operations'
// Performing a background...
import { asyncAdd, asyncAdd_1 } from './async'

let values = [10, 20, 30, 40, 50]
// ...work
let totalAsync = asyncAdd(values)
console.log(`Main Total: ${totalAsync}`)

// Observing a Promise
asyncAdd_1(values).then(total => console.log(`Main Total_1: ${total}`))

// Using asyn and await
async function doTask() {
    let total = await asyncAdd_1(values)
    console.log(`Main Total_11: ${total}`)
}

doTask()

// let total = additionFunction(values)

let total = sumValues(values)
let odds = oddOnly(values)

console.log(`Total: ${total}, Odd Total: ${odds}`)
console.log(`Multiply: ${ops.multiply(values)}`)
console.log(`Substract: ${ops.subtract(1000, values)}`)

console.log('Hello')

// First way to define a function: explicitly create and 
// assign a variable
const func1 = function() {
    console.log('This statement is inside a function')
}

console.log('This statement is outside a function')

func1()

// Second way to define a function: without explicitly
// creating and assigning a variable
function func2() {
    console.log('This statement is inside a function')
}

console.log('This statement is outside a function')

func2()

// Defining functions with parameters
function func3(name, weather) {
    console.log('Hello ' + name + '.')
    console.log('It is ' + weather + ' today.')
}

func3('Bobo', 'cloudy')

// Using a default parameter
function func4(name, weather = 'raining') {
    console.log('Good afternoon ' + name + '.')
    console.log('It is ' + weather + ' today')
}

func4('Sory')

// Using a rest parameter
function func5(name, weather, ...extraArgs) {
    console.log('Good evening ' + name + '.')
    console.log('It is ' + weather + ' tonight.')
    for (let i = 0; i < extraArgs.length; i++) {
        console.log('Extra Arg: ' + extraArgs[i])
    }
}

func5('Ibrahima', 'nebulous', 'one', 'two', 'three')

// Defining a function that returns a result
function func6(name) {
    return ('Hi ' + name + '.')
}

console.log(func6('Fatou'))

// Using a function as an argument
// function myFunc(nameFunc) {
//     return ('Good evening ' + nameFunc() + '.')
// }

const myFunc = (nameFunc) => ('Good evening ' + nameFunc() + '.') 

console.log(myFunc(function() {
    return 'Ramatoulaye'
}))

// Chaining functions calls
// function printName(nameFunc, printFunc) {
//     printFunc(myFunc(nameFunc))
// }

const printName = (nameFunc, printFunc) => 
    printFunc(myFunc(nameFunc))

printName(function() { 
    return 'Alahadji' 
}, console.log)

// Using let to declare variables 
function messageFunc(name, weather) {
    let message = 'Hello, Sory'
    if (weather === 'sunny') {
        let message = 'Hello ' + name + ', it\'s a nice day'
        console.log(message)
    } else {
        let message = 'Hello ' + name + ', it\'s ' + weather + ' today'
        console.log(message)
    }
    console.log(message)
} 

messageFunc('Bobo', 'sunny')
messageFunc('Saliou', 'raining')

// Using var to declare variables 
// function messageFunc1(name, weather) {
//     var message = 'Hello, Sory'
//     if (weather === 'sunny') {
//         var message = 'Hello ' + name + ', it\'s a nice day'
//         console.log(message)
//     } else {
//         var message = 'Hello ' + name + ', it\'s ' + weather + ' today'
//         console.log(message)
//     }
//     console.log(message)
// } 

// messageFunc1('Bobo', 'sunny')
// messageFunc1('Saliou', 'raining')

// Using variable closure
function func7(name) {
    let myLocalVar = 'windy'
    let innerFunc = function() {
        return ('Hello ' + name + '. Today is ' + myLocalVar + '.')
    }
    return innerFunc()
}

console.log(func7('Abdou'))

// Using a template string
function func8(weather) {
    let message = `It is ${weather} today`
    console.log(message)
}

func8('raining')

// Using conditional statements
let name = 'Alfa'

if (name === 'Alfa') {
    console.log('Name is Alfa')
} else if (name === 'Aliou') {
    console.log('Name is Aliou')
} else {
    console.log('Name is never Alfa or Aliou')
} 

switch (name) {
    case 'Alfa':
        console.log('Name is Alfa')
        break
    case 'Aliou':
        console.log('Name is Aliou')
        break
    default:
        console.log('Name is never Alfa or Aliou')
        break
}

// Using the equality operator
// let val1 = 5
// let val2 = "5"

// if (val1 == val2) {
//     console.log('They are the same')
// } else {
//     console.log('They are NOT the same')
// }

// Using the identity operator
let firstVal = 5
let secondVal = "5"
if (firstVal === secondVal) {
    console.log('They are the same')
} else {
    console.log('They are NOT the same')
}

// Explicitly converting types - String concatenation 
// operator precedence
let myData1 = 5 + 5
let myData2 = 5 + '5'

console.log('Result 1: ' + myData1)
console.log('Result 2: ' + myData2)

// Using the number.toString method
let myData3 = (5).toString() + String(5)

console.log('Result: ' + myData3)

// Converting strings to numbers
let firstVal1 = "5"
let firstVal2 = "5"

let result = Number(firstVal1) + Number(firstVal2) 
console.log('Result: ' + result)

// Reading and modifying the contents of an array
let myArray = [100, "Bobo", true]
console.log(`Index 0: ${myArray[0]}`)

myArray[0] = "Tuesday"
console.log(`Index 0: ${myArray[0]}`)

// Enumerating the contents of an array
console.log('---')
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`)
}

console.log('---')

myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`))

// Using the spread operator
function printItems(numValue, stringValue, boolValue) {
    console.log(`Number: ${numValue}`)
    console.log(`String: ${stringValue}`)
    console.log(`Boolean: ${boolValue}`)
}

let theArray = [100, 'Bobo', true]
console.log('Invokes the function using the array values without the spread op.')
printItems(theArray[0], theArray[1], theArray[2])
console.log('Invokes the function using the array values with the spread op. ')
printItems(...theArray)

// Using the spread operator to concatenate arrays
let theArray1 = [100, 'Bobo', true]
let theArray2 = [200, 'Alyou', false, ...theArray1]

theArray2.forEach((value, index) => console.log(`Index ${index}: ${value}`))

// Processing an array
let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
]

// The 2nd argument of the reduce method, i.e. 0, is the initial value we pass
// to that method at which the accumulator begins. 
let totalValue = products.filter(item => item.stock > 0)
                         .reduce((prev, item) => prev + (item.price * item.stock), 0) 

console.log(`Total value: $${totalValue.toFixed(2)}`)

// Working with objects: 
// let myData = new Object()
// myData.name = 'Saliou'
// myData.weather = 'sunny'

// console.log(`Hello ${myData.name}.`)
// console.log(`Today is ${myData.weather}.`)

// Using the object literal format
let myData4 = {
    name: 'Salifou',
    weather: 'cloudy'
}

console.log(`Hello ${myData4.name}.`)
console.log(`Today is ${myData4.weather}.`)

// Using a variable in an object literal
let name5 = 'Safiatou'

let myData5 = {
    name5,
    weather: 'raining'
}

console.log(`Hello ${myData5.name5}.`)
console.log(`Today is ${myData5.weather}.`)

// Adding methods to an object
let myData6 = {
    name: 'Binta', 
    weather: 'sunny',
    printMessages: function() {
        console.log(`Hello ${this.name}.`)
        console.log(`Today is ${this.weather}.`)
    }
}

myData6.printMessages()

let myData7 = {
    name: 'Nènan Tourankè', 
    weather: 'windy',
    printMessages() {
        console.log(`Hello ${this.name}.`)
        console.log(`Today is ${this.weather}.`)
    }
}

myData7.printMessages()

// Defining a fat arrow function. Note: You can't use here the 
// this keyword to refer to the properties defined by the object, 
// instead you must use its reference, i.e. myData8. 
let myData8 = {
    name: 'Mohamed', 
    weather: 'raining',
    printMessages : () => {
        console.log(`Hello ${myData8.name}.`)
        console.log(`It is ${myData8.weather} tonight`)
    }
}

myData8.printMessages()

// Using a class
class MyData {

    constructor() {
        this.name = 'Thierno'
        this.weather = 'rainy'
    }

    printMessages = () => {
        console.log(`Hello ${this.name}.`)
        console.log(`Today is ${this.weather}.`)
    }
}

let myData = new MyData()
myData.printMessages()

// Copying object properties
class MyData1 {

    constructor() {
        this.name = 'Idiatou'
        this.weather = 'cloudy'
    }

    printMessages = () => {
        console.log(`Hello ${this.name}.`)
        console.log(`Today is ${this.weather}`)
    }
}

let myData9 = new MyData1()

let secondObject = {}

Object.assign(secondObject, myData9)

secondObject.printMessages()

// Copying using a spread 
class MyData2 {
    constructor() {
        this.name = 'Bintou'
        this.weather = 'wet'
    }

    printMessages = () => {
        console.log(`Hello ${this.name}.`)
        console.log(`Today is  ${this.weather}.`)
    }
}

let myData10 = new MyData2()
let secondObject1 = { ...myData10, weather: 'rainy' } 

console.log(`myData10: ${myData10.weather}, 
             secondObject1: ${secondObject1.weather}`)

// Navigating object properties
const myData11 = {
    name: 'Mariama', 
    location: {
        city: 'Kindia',
        country: 'Guinea'
    },
    employment: {
        title: 'Manager',
        dept: 'Sales'
    }
} 

function printDetails(data) {
    console.log(`Name: ${data.name}, City: ${data.location.city}, 
                 Role: ${data.employment.title}`)
}

printDetails(myData11)

// Capturing named parameters
const myData12 = {
    name: 'Lamarana',
    location: {
        city: 'Conakry',
        country: 'Mali'
    },
    employment: {
        title: 'Interviewer',
        dept: 'Human Resources'
    }
}

// Variables are defined here as parameters to the function...
function printDetails1({name, location: { city }, employment: { title }}) {
    console.log(`Name: ${name}, City: ${city}, Role: ${title}`)
}

// ...When the function is invoked, these variables will be used as properties  
// of the object which is used as argument. 
printDetails1(myData12)