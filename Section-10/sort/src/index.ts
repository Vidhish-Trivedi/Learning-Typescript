import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection_1 = new NumbersCollection([13, 3, 0, -4, 12]);
// const charactersCollection_1 = new CharactersCollection("Hello,World!");
const linkedList_1 = new LinkedList();
linkedList_1.add(500);
linkedList_1.add(-10);
linkedList_1.add(0);
linkedList_1.add(-150);
linkedList_1.add(-234);
linkedList_1.add(5);


// const sorter_1 = new Sorter(numbersCollection_1);
// const sorter_2 = new Sorter(charactersCollection_1);
const sorter_3 = new Sorter(linkedList_1);


// console.log(numbersCollection_1.getData());
// sorter_1.sort();
// console.log(numbersCollection_1.getData());

// console.log(charactersCollection_1.getData());
// sorter_2.sort();
// console.log(charactersCollection_1.getData());

console.log("Hello");
linkedList_1.print();
console.log("Sorting...");
sorter_3.sort();
console.log("Sorted");
linkedList_1.print();
