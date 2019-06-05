// import { LinkedList } from "./LinkedList/linkedlist";

// let list = new LinkedList();
// list.append(2);
// list.insertAtFront(1);
// list.insertAtFront(3);
// list.remove(3);
// list.reverse();
// let temp = list.find(1);
// temp = list.find(3);
// console.log("End");

// ----------------------------------------

// import { Cache } from "./Cache/cache";

// let cache = new Cache(3);
// cache.insert(72, 'Food');
// cache.insert(13, 'Keychain');
// cache.insert(45, 'Blanket');
// cache.remove(45);
// cache.insert(45, 'Blanket');
// console.log(cache.get(13));
// cache.insert(27, 'Book');

// ----------------------------------------

// import { HashTable } from "./HashTable/hashTable";

// let hashTable = new HashTable(5);
// try {
//     hashTable.put(1, "hello");
// } catch (err) {
//     console.log(err);
// }

// hashTable.put("yo", "shalom");
// hashTable.put("who", "fizz");
// hashTable.put("tonight", "young");
// hashTable.put("yes", "you are");
// hashTable.put("let", "me down");
// hashTable.put("strong", "meal");

// console.log(hashTable.get("tonight"));
// console.log(hashTable.get("what"));

// hashTable.remove("yes");
// hashTable.remove("what");

// ----------------------------------------

import { Node } from "./Graph/node";
import { SearchUtils } from "./Graph/search-utils";

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node0.addNeighbor(node1);
node0.addNeighbor(node4);
node0.addNeighbor(node5);

node1.addNeighbor(node3);
node1.addNeighbor(node4);

node2.addNeighbor(node1);

node3.addNeighbor(node2);
node3.addNeighbor(node4);

// SearchUtils.DFS(node0);
SearchUtils.BFS(node0);




