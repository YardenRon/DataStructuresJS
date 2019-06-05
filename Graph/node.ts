export class Node {
    data: any;
    neighbors: Node[];

    constructor(data: any) {
        this.data = data;
        this.neighbors = [];
    }

    isNeighborExist(neighbor: Node): boolean {
        if (neighbor) {
            return this.neighbors.filter(nodeNeighbor => nodeNeighbor.data === neighbor.data).length > 0;
        } else {
            return false;
        }
    }

    addNeighbor(neighbor: Node): void {
        if (neighbor && !this.isNeighborExist(neighbor)) {
            this.neighbors.push(neighbor);
        }
    }
}