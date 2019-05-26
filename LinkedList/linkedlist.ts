import { Node } from './node';

export class LinkedList {
    head: Node;
    tail: Node;

    append(data: any): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    insertAtFront(data: any): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    remove(data: any): void {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    if (current.next) {
                        current.next.prev = null;
                    }
                    this.head = current.next;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    }

    reverse(): void {
        let current = this.head;
        let prev = null;

        while (current) {
            let next = current.next;
            current.prev = next;
            current.next = prev;

            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    find(data: any): Node {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }

        return null;
    }
}