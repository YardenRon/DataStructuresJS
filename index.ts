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

import { Cache } from "./Cache/cache";

let cache = new Cache(3);
cache.insert(72, 'Food');
cache.insert(13, 'Keychain');
cache.insert(45, 'Blanket');
cache.remove(45);
cache.insert(45, 'Blanket');
console.log(cache.get(13));
cache.insert(27, 'Book');