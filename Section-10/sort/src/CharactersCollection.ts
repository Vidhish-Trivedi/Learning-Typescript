// Class to help in sorting strings.
export class CharactersCollection{
    private data: string;

    public constructor(data: string) {
        this.data = data;
    };

    public get length(): number {
        return(this.data.length);
    };

    // Will compare as if all chars had same casing.
    public compare(i: number, j: number): boolean {
        return(this.data[i].toLowerCase() > this.data[j].toLowerCase());
    };

    public swap(i: number, j: number): void {
        const charArr = this.data.split("");    // Convert to array.
        
        // Swap.
        const t = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = t;

        this.data = charArr.join("");    // Convert back to string.
    };

    public getData(): string {
        return(this.data);
    };

};
