export class Node {
    key: any;
    value: any;
    prev: Node;
    next: Node;

    constructor (key: any, value: any) {
        this.key = key;
        this.value = value;
    }
}