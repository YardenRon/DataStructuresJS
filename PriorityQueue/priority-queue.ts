class Item {
    key: string;
    priority: number;

    constructor(key: string, priority: number) {
        this.key = key;
        this.priority = priority;
    }
}

export class PriorityQueue {
    items: Item[];

    constructor() {
        this.items = [];
    }

    enqueue(key: string, priority: number) {
        const item = new Item(key, priority);

        let i = 0;
        while (i < this.items.length && this.items[i].priority > priority) {
            i++;
        }

        if (i === this.items.length) {
            this.items.push(item);
        } else {
            this.items.splice(i, 0, item);
        }
    }

    dequeue(): Item {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    changePriority(key: string, newPriority: number) {
        let found = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].key === key) {
                found = true;
                this.items[i].priority = newPriority;
            }
        }

        if (!found) {
            console.log(`key ${key} not found`);
        }
    }

    toString() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].key + " ";
        }
        return str;
    }
}