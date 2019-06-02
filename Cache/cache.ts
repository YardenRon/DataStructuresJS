import { LinkedList } from "../LinkedList/linkedlist";
import { Node } from "../LinkedList/node";

export class Cache {
    hashTable = {}; // Should be replaced by a real hash table
    list: LinkedList;
    maxSize: number;

    constructor(maxSize: number) {
        this.list = new LinkedList();
        this.maxSize = maxSize;
    }

    get(key: any): any {
        const node = this.hashTable[key];
        if (!node) {
            return null;
        }

        if (node !== this.list.head) {
            this.list.removeNode(node);
            this.list.insertNodeAtFront(node);
        }
        return node.value;
    }

    remove(key: any): boolean {
        const node = this.hashTable[key];
        delete this.hashTable[key];
        this.list.removeNode(node);
        return true;
    }

    insert(key: any, value:any): void {
        this.remove(key);

        const reachedMaxSize = Object.keys(this.hashTable).length >= this.maxSize;
        if (reachedMaxSize && this.list.tail) {
            this.remove(this.list.tail.key);
        }
        const node = new Node(key, value);
        this.list.insertNodeAtFront(node);
        this.hashTable[key] = node;
    }
}