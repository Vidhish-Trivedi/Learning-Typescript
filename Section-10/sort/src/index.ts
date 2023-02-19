import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection_1 = new NumbersCollection([13, 3, 0, -4, 12]);
const charactersCollection_1 = new CharactersCollection("Hello,World!");
const linkedList_1 = new LinkedList();
linkedList_1.add(500);
linkedList_1.add(-10);
linkedList_1.add(0);
linkedList_1.add(-150);
linkedList_1.add(-234);
linkedList_1.add(5);

console.log(numbersCollection_1.getData());
numbersCollection_1.sort();
console.log(numbersCollection_1.getData());

console.log(charactersCollection_1.getData());
charactersCollection_1.sort();
console.log(charactersCollection_1.getData());

console.log("Hello");
linkedList_1.print();
console.log("Sorting...");
linkedList_1.sort();
console.log("Sorted");
linkedList_1.print();
