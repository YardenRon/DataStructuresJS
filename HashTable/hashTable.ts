import { LinkedList } from "../LinkedList/linkedlist";

export class HashTable {

    array: LinkedList[];
    limit: number;

    constructor(limit: number) {
        this.array = [];
        this.limit = limit;
    }

    hash(key: any): number {
        if (typeof key !== 'string') {
            throw 'Error: key is not a string';
        }

        let sum = 0;
        for(let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.limit;
    }

    get(key: any): any {
        const hash = this.hash(key);
        if (!this.array[hash]) {
            return null;
        }
        const node =  this.array[hash].find(key);
        return node? node.value : null;
    }

    put(key: any, value: any): void {
        const hash = this.hash(key);
        if (!this.array[hash]) {
            this.array[hash] = new LinkedList();
        }
        this.array[hash].remove(key);
        this.array[hash].append(key, value);
    }

    remove(key: any): boolean {
        const hash = this.hash(key);
        if (this.array[hash]) {
            this.array[hash].remove(key);
        }
        return true;
    }

}