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

	while (curr != null) {
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


//SinglyLinkedList.prototype.insertAfter = function(data, afterNodeData) {}
//SinglyLinkedList.prototype.search = function(data) {}


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

