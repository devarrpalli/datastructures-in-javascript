'use strict'

function Node(data) {
	this.val = data;
	this.next = null;
}


function Stack() {
	this.head = null;
}


Stack.prototype.push = function(data) { // pushing to the front of the list so that pop() is O(1)
	var curr = this.head;
	var newNode = new Node(data);

	if (!this.head) {
		this.head = newNode;
	} else {
		newNode.next = curr;
		this.head = newNode;
	}
}


Stack.prototype.pop = function() {
	var curr = this.head;
	this.head = curr.next;

	return curr.val;
}


Stack.prototype.peek = function() {
	return this.head.val;
}


Stack.prototype.length = function() {
	var curr = this.head;

	var numOfNodes;
	while (curr !== null) {
		numOfNodes++;
		curr = curr.next;
	}

	return numOfNodes;
}

Stack.prototype.print = function() {
	var curr = this.head;

	while(curr !== null) {
		console.log(curr.val);
		curr = curr.next;
	}
}



var myStackList = new Stack();
myStackList.push(1);
myStackList.push(2);
myStackList.push(3);
myStackList.push(4);
console.log("//printing stack list: 4 3 2 1");
myStackList.print();
console.log("//printing stack after pop(): 4");
console.log(myStackList.pop());
console.log("//printing stack after peek(): 3");
console.log(myStackList.peek());
console.log("//printing stack length: 3");
console.log(myStackList.length());