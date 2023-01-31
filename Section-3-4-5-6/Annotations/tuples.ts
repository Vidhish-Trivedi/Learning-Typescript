// Array-like structure where each element represents some property of a record.

// Object representing a beverage:
// Properties: color: string, carbonated: boolean, sugar: number.
// Representation: ("brown", true, 20)      // Loss of information about property labels color, carbonated, sugar.
// Order is important when using tuples to make sense of a record.
// Without order, tuples are meaningless.

// As an object.
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 20
};

// As an array.
// const pepsi = ["black", true, 20];

// As a tuple.
const pepsi: [string, boolean, number] = ["black", true, 20];    // Specify order of types of elements after ":"

// Alter: Using type alias.  (covered later in detail).
// Like typedef in C-language.
type Drink = [string, boolean, number];

const cola: Drink = ["black-brown", true, 25];
const tea: Drink = ["brown", false, 5];

// When to use tuples ?
//      Using CSV files to represent rows.
//      Usually, objects are better for code readability.
