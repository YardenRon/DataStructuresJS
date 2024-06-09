import { PriorityQueue } from './priority-queue';

let priorityQueue = new PriorityQueue();
 
console.log(`isEmpty = ${priorityQueue.isEmpty()}`);
  
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);
 
// prints [Sheru Sunny Sumit Piyush Gourav]
console.log(priorityQueue.toString());
 
// removes Sheru
console.log(`removed ${priorityQueue.dequeue().key}`);
 
priorityQueue.enqueue("Sunil", 2);
 
// prints [Sunil Sunny Sumit Piyush Gourav]
console.log(priorityQueue.toString());