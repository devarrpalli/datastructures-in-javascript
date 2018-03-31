function Node(data) {
	this.val = data;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = null;
}


SinglyLinkedList.prototype.add = function(data) {
	var newNode = new Node(data);

	if (!this.head) {
		this.head = newNode;
	} else {
		//traverse to the end and add the new node
		var curr = this.head;
		while (curr.next !== null) {
			curr = curr.next;
		}

		curr.next = newNode;
	}
}


SinglyLinkedList.prototype.remove = function(data) {
	var prev = this.head;
	var curr = this.head;

	while (curr !== null) {
		if (curr.val === data) {
			if (curr === this.head) {
				this.head = curr.next;
			}

			prev.next = curr.next;			
		} else {
			prev = curr;
		}

		curr = curr.next;
	}
}


SinglyLinkedList.prototype.addAfter = function(data, addAfterVal) {
	var curr = this.head;

	while (curr !== null) {
		if (curr.val === addAfterVal) {
			var newNode = new Node(data);
			newNode.next = curr.next;
			curr.next = newNode;
		}

		curr = curr.next;
	}
}


SinglyLinkedList.prototype.search = function(data) {
	var curr = this.head;

	while (curr !== null) {
		if (curr.val === data) {
			return true;
		}

		curr = curr.next;
	}

	return false;
}


SinglyLinkedList.prototype.length = function() {
	var curr = this.head;

	var cnt = 0;
	while (curr !== null) {
		cnt++;
		curr = curr.next;
	}

	return cnt;
}

SinglyLinkedList.prototype.print = function() {
	var curr = this.head;
	while (curr != null) {
		console.log(curr.val);
		curr = curr.next;
	}
}


var myList = new SinglyLinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4); 
console.log("//printing current list after add: 1 2 3 4");
myList.print();
myList.remove(1);
myList.remove(3);
console.log("//printing current list after remove(1), remove(3): 2 4");
myList.print();
myList.add(5);
myList.add(5);
myList.add(5);
console.log("//printing current list after add(5,5,5): 2 4 5 5 5");
myList.print();
myList.remove(5);
console.log("//printing current list after remove(5): 2 4 5 5");
myList.print();
myList.add(6);
myList.add(8);
console.log("//printing current list after add: 2 4 6 8");
myList.print();
myList.addAfter(7, 6);
console.log("//printing current list after addAfter(7,6): 2 4 6 7 8");
myList.print();
console.log("//printing myList.search(8)");
console.log(myList.search(8));
console.log("//printing myList.length(): 5");
console.log(myList.length());

