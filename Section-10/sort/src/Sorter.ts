// Abstract class Sorter.
// We are not going to instantiate Sorter directly.
// We will only ever create instances of its child classes.
// Can contain abstract as well as implemented methods.
// It is then the responsibility of the child class to implement the abstract class.
export abstract class Sorter{
    public abstract get length(): number;
    public abstract compare(i: number, j: number): boolean;
    public abstract swap(i: number, j: number): void;

    public sort(): void{
        for(let i = 0; i < this.length - 1; i++){
            for(let j = i + 1; j < this.length; j++){
                if(this.compare(i, j)){      // Abstraction.
                    this.swap(i, j);         // Abstraction.
                }                
            }
        }
        return;
    };
};
