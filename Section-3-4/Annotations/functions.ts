// Type annotations for functions:
//      Code that tells TS what type of arguments it will receive and what type of values it will return.
// Type inference for functions:
//      TS tries to figure out what type of value a function will "return". (does not detect type of arguments).
//      No type inference for arguments to a function!
//      We do get type inference for return value of a function, but it is a better practice to use annotations.


// Here, logNumber is a variable which is assigned a function.
const logNumber: (i: number) => void = (i: number) => {         // const my_func: (argument: type, ...) => return_type = (arg: type) => {func_body};
    console.log(i);
};

// Name of argument to a function and name used while specifying type need not be same, but order matters.
// const add: (x: number, y: number) => number = (a: number, b: number) => {
//     return(a + b);
// };

// Annotating functions.
const add = (a: number, b: number): number => {     // const my_func = (argument: type, ...): return_type => {func_body};
    return(a + b);
};

// Using the function keyword.
function divide(a: number, b: number): number {
    return(a/b);
};

// For anonymous functions.
const multiply = function(a: number, b: number): number {
    return(a*b);
};

// void and never...
const logger = (message: string): void => {
    console.log(message);
};

// "never" is used to indicate that a function will never be executed completely.
const throwError = (message: string): never => {
    throw new Error(message);   // After throwing an error, we will exit the function.
};


// Destructuring with annotations.
const forecast = {
    date: new Date(),
    weather: "sunny"
};

// const logWeather = (fc: {date: Date, weather: string}): void => {
//     console.log(fc.date);
//     console.log(fc.weather);
// };

// ES2015:
// const logWeather = ({date, weather}) => {
//     console.log(date);
//     console.log(weather);
// }

// Now, for destructuring in TS...
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};
logWeather(forecast);
