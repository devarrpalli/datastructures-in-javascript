'use strict'


function Node(data) {
	this.val = data;
	this.next = null;
}


function QueueList() {
	this.head = null;
}


QueueList.prototype.add = function(data) {
	var curr = this.head;
	var newNode = new Node(data);

	if (!this.head) {
		this.head = newNode;
	} else {
		while (curr.next !== null) {
			curr = curr.next;
		}

		newNode.next = curr.next;
		curr.next = newNode;
	}
}


QueueList.prototype.remove = function() {
	var curr = this.head;
	this.head = curr.next;
	
	return curr.val;
}


QueueList.prototype.peek = function() {
	return this.head.val;
}


QueueList.prototype.length = function() {
	var curr = this.head;

	var numOfNodes = 0;
	while (curr !== null) {
		numOfNodes++;
		curr = curr.next;
	}

	return numOfNodes;
}


QueueList.prototype.print = function() {
	var curr = this.head;

	while (curr != null) {
		console.log(curr.val);
		curr = curr.next;
	}
}


var myQueueList = new QueueList();
myQueueList.add(1);
myQueueList.add(2);
myQueueList.add(3);
myQueueList.add(4);
console.log("//printing queue list: 1 2 3 4");
myQueueList.print();
console.log("//printing queue remove(): 1");
console.log(myQueueList.remove());
console.log("//printing queue peek(): 2");
console.log(myQueueList.peek());
console.log("//printing queue length: 3");
console.log(myQueueList.length());
