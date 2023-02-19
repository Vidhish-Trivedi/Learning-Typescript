"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Abstract class Sorter.
// We are not going to instantiate Sorter directly.
// We will only ever create instances of its child classes.
// Can contain abstract as well as implemented methods.
// It is then the responsibility of the child class to implement the abstract class.
class Sorter {
    sort() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (this.compare(i, j)) { // Abstraction.
                    this.swap(i, j); // Abstraction.
                }
            }
        }
        return;
    }
    ;
}
exports.Sorter = Sorter;
;
