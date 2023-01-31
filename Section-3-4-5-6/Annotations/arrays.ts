// Typed Arrays: arrays where each element is of some consistent type. (for multiple types, we need to specify additionally).
// const carMakers = ["ford", "toyota", "honda"];    // Type inference.

// We might also annotate, especially when we initialise an array as an empty array.
const arr: string[] = [];

const carMakers: string[] = ["ford", "toyota", "honda"];

const dates = [new Date(), new Date()];    // Type inference.

const arr_2d = [
    ["a1", "a2", "a3"],
    ["b1", "b2"],
    ["c1"]
];


const car1 = carMakers[1];
const car2 = carMakers.pop();
// carMakers.push(23);
carMakers.push("mazda");


// Help with map, forEach, ...
carMakers.map((c: string): string => {
    return c;
});


// Typed arrays allowing flexible types.
// const var_dates = [new Date(), "2023-01-31"];    // Type inference.

const var_dates: (Date | string)[] = [new Date()];
var_dates.push(new Date());
var_dates.push("hello");


// When to use typed arrays ?
//      Any time we need to represent a collection of records with some arbitrary sort order.
