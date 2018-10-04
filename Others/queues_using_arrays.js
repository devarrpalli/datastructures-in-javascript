'use strict'

function Queue() {
	this.queue = [];
}


Queue.prototype.add = function(data) {
	this.queue.push(data);
}


Queue.prototype.remove = function() {
	return this.queue.shift();
}


Queue.prototype.peek = function() {
	return this.queue[this.queue.length -1];
}


Queue.prototype.length = function() {
	return this.queue.length;
}


Queue.prototype.print = function() {
	console.log(this.queue.join(' '));
}


var myQueue = new Queue();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);
console.log("//printing queue list: 1 2 3 4");
myQueue.print();
console.log("//printing queue length: 4");
console.log(myQueue.length());
console.log("//printing queue remove():  1");
console.log(myQueue.remove());
console.log("//printing queue peek(): 4");
console.log(myQueue.peek());
