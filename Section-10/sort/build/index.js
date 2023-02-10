"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    sort() {
        let tmp = this.collection;
        for (let i = 0; i < tmp.length - 1; i++) {
            for (let j = i + 1; j < tmp.length; j++) {
                if (tmp[i] > tmp[j]) {
                    let t = tmp[i];
                    tmp[i] = tmp[j];
                    tmp[j] = t;
                }
            }
        }
        return (tmp);
    }
    ;
}
;
console.log("Hello!");
const sorter_1 = new Sorter([13, 3, 0, -4, 12]);
console.log(sorter_1.sort());
console.log("bye");
