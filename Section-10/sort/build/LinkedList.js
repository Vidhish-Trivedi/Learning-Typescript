"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
// Class for a LinkedList Node.
class Node {
    constructor(val) {
        this.nextNode = null;
        this.val = val;
    }
    ;
    get value() {
        return (this.val);
    }
    ;
    get next() {
        return (this.nextNode);
    }
    ;
    setNext(n) {
        this.nextNode = n;
    }
    ;
    setValue(v) {
        this.val = v;
    }
    ;
}
;
// Class for LinkedList.
class LinkedList {
    constructor() {
        this.head = null;
    }
    // Add to end.
    add(num) {
        const node = new Node(num);
        if (this.head == null) {
            this.head = node;
            return;
        }
        else {
            let t = this.head;
            while (t.next != null) {
                t = t.next;
            }
            t.setNext(node);
            return;
        }
    }
    ;
    get length() {
        let cnt = 0;
        let t = this.head;
        while (t != null) {
            cnt++;
            t = t.next;
        }
        return (cnt);
    }
    ;
    at(idx) {
        if (this.head == null) {
            throw new Error("Index out of bounds");
        }
        let cnt = 0;
        let t = this.head;
        while (t != null) {
            if (cnt === idx) {
                return (t);
            }
            cnt++;
            t = t.next;
        }
        throw new Error("Index out of bounds");
    }
    ;
    compare(i, j) {
        if (this.head == null || i > this.length - 1 || j > this.length - 1) {
            throw new Error("List is empty OR index out of bounds");
        }
        return (this.at(i).value > this.at(j).value);
    }
    ;
    print() {
        if (this.head == null) {
            console.log("Linked list is empty");
            return;
        }
        let t = this.head;
        while (t != null) {
            console.log(t.value);
            t = t.next;
        }
    }
    ;
    swap(i, j) {
        // For simplicity, we will just swap the values of the nodes.
        let iNode = this.at(i);
        let jNode = this.at(j);
        let t = iNode.value;
        iNode.setValue(jNode.value);
        jNode.setValue(t);
    }
    ;
}
exports.LinkedList = LinkedList;
;
