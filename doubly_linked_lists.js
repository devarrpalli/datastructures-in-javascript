'use strict'

function Node(data) {
	this.val = data;
	this.prev = null;
	this.next = null;
}


function DoublyLinkedList() {
	this.head = null;
}


DoublyLinkedList.prototype.add = function(data) {
	var curr = this.head;
	var newNode = new Node(data);

	if (!this.head) {
		this.head = newNode;
	} else {
		while (curr.next !== null) {
			curr = curr.next;			
		}
		newNode.prev = curr;
		curr.next = newNode;
	}
}


DoublyLinkedList.prototype.remove = function(data) {
	var curr = this.head;

	if (curr.val === data) {
		this.head = curr.next;
		curr.prev = null;
	} else {
		while (curr !== null) {
			if (curr.val === data) {
				curr.prev.next = curr.next;
				curr.next.prev = curr.prev;
			} 

			curr = curr.next;
		}
	}
}


DoublyLinkedList.prototype.addAfter = function(data, addAfterNodeVal) {
	var curr = this.head;
	var newNode = new Node(data);

	while (curr !== null) {
		if (curr.val === addAfterNodeVal) {
			newNode.next = curr.next;
			newNode.prev = curr;

			if (curr.next !== null) {
				curr.next.prev = newNode;	
			}
			curr.next = newNode;
		}

		curr = curr.next;
	}
}


DoublyLinkedList.prototype.length = function() {
	var curr = this.head;

	var numOfNodes = 0;
	while (curr !== null) {
		numOfNodes++;
		curr = curr.next;
	}

	return numOfNodes;
}

DoublyLinkedList.prototype.print = function() {
	var curr = this.head;

	while (curr !== null) {
		console.log(curr.val);
		curr = curr.next;
	}
}

var myDList = new DoublyLinkedList();
myDList.add(1);
myDList.add(2);
myDList.add(3);
myDList.add(4);
myDList.add(5);
console.log("//printing myDList after add: 1 2 3 4 5");
myDList.print();
myDList.remove(4);
console.log("//printing myDList after remove(4): 1 2 3 5");
myDList.print();
myDList.remove(1);
console.log("//printing myDList after remove(1): 2 3 5");
myDList.print();
myDList.addAfter(4, 3);
console.log("//printing myDList after addAfter(4, 3): 2 3 4 5");
myDList.print();
myDList.addAfter(6, 5);
console.log("//printing myDList after addAfter(6, 5): 2 3 4 5 6");
myDList.print();
console.log("//printling myDList.length: 5");
console.log(myDList.length());