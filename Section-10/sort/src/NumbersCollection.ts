import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    private data: number[];

    public constructor(data: number[]) {
        super();
        this.data = data;
    };

    public getData(): number[] {
        return(this.data);
    };

    // i: leftIndex, j: rightIndex.
    public compare(i: number, j: number): boolean {
        return(this.data[i] > this.data[j]);
    };

    public swap(i: number, j: number): void {
        let t = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = t;
    };

    // The "get" access specifier allows us to use temp.length instead of temp.length()
    public get length(): number {
        return(this.data.length);
    };
};
