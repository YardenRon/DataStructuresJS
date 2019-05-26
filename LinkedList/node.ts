export class Node {
    data: any;
    prev: Node;
    next: Node;

    constructor (data: any) {
        this.data = data;
    }
}