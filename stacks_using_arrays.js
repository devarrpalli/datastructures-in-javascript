'use strict'


function Stack() {
	this.stack = [];
}


Stack.prototype.push = function(data) {
	this.stack.push(data);
}


Stack.prototype.pop = function() {
	return this.stack.pop();
}


Stack.prototype.peek = function() {
	return this.stack[this.stack.length - 1];
}


Stack.prototype.length = function() {
	return this.stack.length;
}


Stack.prototype.print = function() {
	console.log(this.stack.join(' '));
}



var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log("//printing stack list: 1 2 3 4 5");
myStack.print();
myStack.pop();
console.log("//printing stack list after pop(): 1 2 3 4");
myStack.print();
console.log("//printing stack list after peek(): 4");
console.log(myStack.peek());
console.log("//printing stack length: 4");
console.log(myStack.length());

