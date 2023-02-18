interface Sortable{
    length: number;
    compare(i: number, j: number): boolean;     // Returns true if we need to swap i, j
    swap(i: number, j: number): void;
};

export class Sorter{
    private collection: Sortable;

    public constructor(collection: Sortable) {
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
