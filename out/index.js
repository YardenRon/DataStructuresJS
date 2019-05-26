"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkedlist_1 = require("./LinkedList/linkedlist");
var list = new linkedlist_1.LinkedList();
list.append(2);
list.insertAtFront(1);
list.insertAtFront(3);
list.remove(3);
list.reverse();
var temp = list.find(1);
temp = list.find(3);
console.log("End");
//# sourceMappingURL=index.js.map