import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

console.log("Hello!");

const numbersCollection_1 = new NumbersCollection([13, 3, 0, -4, 12]);

const sorter_1 = new Sorter(numbersCollection_1);

console.log(numbersCollection_1.getData());
sorter_1.sort();
console.log(numbersCollection_1.getData());

console.log("bye");
