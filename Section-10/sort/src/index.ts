import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection_1 = new NumbersCollection([13, 3, 0, -4, 12]);
const charactersCollection_1 = new CharactersCollection("Hello,World!");

const sorter_1 = new Sorter(numbersCollection_1);
const sorter_2 = new Sorter(charactersCollection_1);

console.log(numbersCollection_1.getData());
sorter_1.sort();
console.log(numbersCollection_1.getData());

console.log(charactersCollection_1.getData());
sorter_2.sort();
console.log(charactersCollection_1.getData());
