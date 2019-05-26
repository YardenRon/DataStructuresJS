import { Node } from './node';

export class LinkedList {
    head: Node;
    tail: Node;

    append(key: any, value: any): void {
        const node = new Node(key, value);

        this.appendNode(node);
    }

    appendNode(node: Node): void {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    insertAtFront(key: any, value: any): void {
        const node = new Node(key, value);

        this.insertNodeAtFront(node);
    }

    insertNodeAtFront(node: Node): void {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    remove(key: any): Node {
        let current = this.head;

        while (current) {
            if (current.key === key) {
                this.removeNode(current);
                return current;
            }
            current = current.next;
        }

        return null;
    }

    removeNode(node: Node): void {
        if (node) {
            if (node === this.head) {
                if (node.next) {
                    node.next.prev = null;
                }
                this.head = node.next;
            } else if (node === this.tail) {
                this.tail = node.prev;
                this.tail.next = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
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

    find(key: any): Node {
        let current = this.head;

        while (current) {
            if (current.key === key) {
                return current;
            }
            current = current.next;
        }

        return null;
    }
}