import { NumbersCollection } from "./NumbersCollection";

export class Sorter{
    private collection: NumbersCollection;

    public constructor(collection: NumbersCollection) {
        this.collection = collection;  
    };

    public sort(): void{
        for(let i = 0; i < this.collection.length - 1; i++){
            for(let j = i + 1; j < this.collection.length; j++){
                if(this.collection.compare(i, j)){      // Abstraction.
                    this.collection.swap(i, j);         // Abstraction.
                }                
            }
        }
        return;
    };
};
