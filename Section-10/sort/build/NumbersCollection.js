"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    ;
    getData() {
        return (this.data);
    }
    ;
    // i: leftIndex, j: rightIndex.
    compare(i, j) {
        return (this.data[i] > this.data[j]);
    }
    ;
    swap(i, j) {
        let t = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = t;
    }
    ;
    // The "get" access specifier allows us to use temp.length instead of temp.length()
    get length() {
        return (this.data.length);
    }
    ;
}
exports.NumbersCollection = NumbersCollection;
;
