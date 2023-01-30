// TYPE ANNOTATIONS IN TYPESCRIPT.

let apples: number = 5;  // Variable declaration with type annotation.
// apples = 44;
// apples = "hello";

let speed: string = "fast";
// speed = 44;
// speed = "slow";

let hasName: boolean = true;
let nothing1: null = null;  // Notice that the type and the value have the same word "null".
let nothing2: undefined = undefined;  // Notice that the type and the value have the same word "undefined".


// Built-In Objects.
let now: Date = new Date();
// now = "hello";
// now = 56;


// Arrays.
let colors: string[] = ["red", "green", "blue"];  // Here, string[] is just the annotation, the array is created by the code on RHS.
let nums: number[] = [1, 0.4523, -2135, 0]
// Similarly, others follow.


// Classes
class Car {
}

let myCar: Car = new Car();


// Object literal.
let point1: {x: number, y: number} = {
    x: 10,
    y: 20
};

// let point2: {x: number, y: number} = {
//     x: 10,
//     y: true
// };


// Functions: What type is being assigned to the function ?  DESCRIPTION OF FUNCTION AS ANNOTATION.
const logNumber: (i: number) => void = (i: number) => {         // ... : (argument list with annotations) => return type(s) expected = ...
    console.log(i);
};


// TYPE INFERENCE EXAMPLE.
let oranges = 5;    // Hover over variable name.
let banana;     // Hover over variable name.
banana = 15;    // Hover over variable name.


// When to use annotations ?
// 1.) Functions that return the any type:

const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);  // {x: 10, y: 20}
const coordinates: {x: number, y: number} = JSON.parse(json);   // Fix: for type "any".

// 2.) Delayed Initialization:

// let words = ["red", "green", "blue"];
// let foundWord;    // Type is inferred as "any".
// // Iterate through words, set foundWord to true.
// for (let i = 0; i < words.length; i++) {
//     if(words[i] === "green"){
//         foundWord = true;   // Type is inferred as "any".
//     }
// }

// Fix is to add a type annotation or initialize foundWord when declaring it.

let words = ["red", "green", "blue"];
let foundWord: boolean;    // OR, let foundWord = false;
// Iterate through words, set foundWord to true.
for (let i = 0; i < words.length; i++) {
    if(words[i] === "green"){
        foundWord = true;   // Type is inferred as "any".
    }
}

// 3.) When the type can not be inferred correctly:

// let numbers = [-10, -1, 12];
// // If a positive number is in numbers, assign it to numberAboveZero, else assign false.  // BAD CODE IN GENERAL !!!
// let numberAboveZero = false;    // Inferred type is boolean!
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0){
//         numberAboveZero = numbers[i];
//     }
// }

let numbers = [-10, -1, 12];
// If a positive number is in numbers, assign it to numberAboveZero, else assign false.  // BAD CODE IN GENERAL !!!
let numberAboveZero: boolean | number = false;    // FIXED.
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}
