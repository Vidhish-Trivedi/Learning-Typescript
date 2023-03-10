"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
// Class to help in sorting strings.
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    ;
    get length() {
        return (this.data.length);
    }
    ;
    // Will compare as if all chars had same casing.
    compare(i, j) {
        return (this.data[i].toLowerCase() > this.data[j].toLowerCase());
    }
    ;
    swap(i, j) {
        const charArr = this.data.split(""); // Convert to array.
        // Swap.
        const t = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = t;
        this.data = charArr.join(""); // Convert back to string.
    }
    ;
    getData() {
        return (this.data);
    }
    ;
}
exports.CharactersCollection = CharactersCollection;
;
