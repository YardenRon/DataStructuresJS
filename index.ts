import { LinkedList } from "./LinkedList/linkedlist";

let list = new LinkedList();
list.append(2);
list.insertAtFront(1);
list.insertAtFront(3);
list.remove(3);
list.reverse();
let temp = list.find(1);
temp = list.find(3);
console.log("End");