import { Sortable } from "./Sorter";

// Class for a LinkedList Node.
class Node {
    private val: number;
    private nextNode: Node | null = null;

    public constructor(val: number) {
        this.val = val;
    };

    public get value(): number {
        return(this.val);
    };

    public get next(): Node | null {
        return(this.nextNode);
    };

    public setNext(n: Node): void {
        this.nextNode = n;
    };

    public setValue(v: number): void {
        this.val = v;
    };
};

// Class for LinkedList.
export class LinkedList implements Sortable{
    private head: Node | null = null;

    // Add to end.
    public add(num: number): void {
        const node = new Node(num);
        
        if(this.head == null){
            this.head = node;
            return;
        }
        else{
            let t = this.head;
            while(t.next != null){
                t = t.next;
            }
            t.setNext(node);
            return; 
        }
    };

    public get length(): number {
        let cnt = 0;
        let t = this.head;
        while(t != null){
            cnt++;
            t = t.next;
        }
        return(cnt);
    };

    public at(idx: number): Node {
        if(this.head == null){
            throw new Error("Index out of bounds");
        }
        let cnt = 0;
        let t: Node | null = this.head;
        while(t != null){
            if(cnt === idx){
                return(t);
            }
            cnt++;
            t = t.next;
        }
        throw new Error("Index out of bounds");
    };

    public compare(i: number, j: number): boolean {
        if(this.head == null || i > this.length - 1 || j > this.length - 1){
            throw new Error("List is empty OR index out of bounds")
        }
        return(this.at(i).value > this.at(j).value);
    };

    public print(): void {
        if(this.head == null){
            console.log("Linked list is empty");
            return;
        }
        let t: Node | null = this.head;
        while(t != null){
            console.log(t.value);
            t = t.next;
        }
    };

    public swap(i: number, j:number): void {
        // For simplicity, we will just swap the values of the nodes.
        let iNode = this.at(i);
        let jNode = this.at(j);

        let t = iNode.value;
        iNode.setValue(jNode.value);
        jNode.setValue(t);
    };
};
