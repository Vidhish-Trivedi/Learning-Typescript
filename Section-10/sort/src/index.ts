class Sorter{
    private collection: number[] | string;

    public constructor(collection: number[] | string) {
        this.collection = collection;  
    };

    // Bubble Sort.
    public sort(): number[] | string{
        let tmp = this.collection;    // Type inference will handle this.
        for(let i = 0; i < tmp.length - 1; i++){
            for(let j = i + 1; j < tmp.length; j++){
                if(tmp instanceof Array){       // Type Guard.
                    if(tmp[i] > tmp[j]){
                        let t = tmp[i];
                        tmp[i] = tmp[j];
                        tmp[j] = t;
                    }
                }

                if(typeof tmp === "string"){       // Type Guard.
                    // Logic for sorting a string.
                }
            }
        }
        return(tmp);
    };
};

console.log("Hello!");


const sorter_1 = new Sorter([13, 3, 0, -4, 12]);
console.log(sorter_1.sort());


console.log("bye");
