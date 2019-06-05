import { Node } from './node';

export class SearchUtils {

    static DFS(root: Node): void {
        if (root) {
            this.visit(root);
            root['visited'] = true;

            root.neighbors.forEach(neighbor => {
                if (!neighbor['visited']) {
                    this.DFS(neighbor);
                }
            });
        }
    }

    static BFS(root: Node): void {
        const queue = [];
        root['marked'] = true;
        queue.push(root);

        while (queue.length > 0) {
            const node = queue.shift();
            this.visit(node);
            node.neighbors.forEach(neighbor => {
                if (!neighbor['marked']) {
                    neighbor['marked'] = true;
                    queue.push(neighbor);
                }
            });
        }
    }

    static visit(node: Node): void {
        console.log(node.data);
    }
}