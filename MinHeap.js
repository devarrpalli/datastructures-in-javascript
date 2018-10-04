'use strict'

class MinHeap {
	constructor() {
		this.heap = [null];
	}

	insert(value) {		
		this.heap.push(value);
		this.heapifyUp();
	}

	heapifyUp() {
		let currIdx = this.heap.length - 1;
		let parentIdx = Math.floor(currIdx/2);

		while (parentIdx && this.heap[parentIdx] > this.heap[currIdx]) {
			let temp = this.heap[parentIdx];
			this.heap[parentIdx] = this.heap[currIdx];
			this.heap[currIdx] = temp;

			currIdx = parentIdx;
			parentIdx = Math.floor(currIdx/2);
		}
	}

	remove() {
		if (this.heap.length < 3) {
			const toReturn = this.heap.pop();
			this.heap[0] = null;
			return toReturn;
		}

		const toRemove = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.heapifyDown();
		return toRemove;		
	}

	heapifyDown() {
		let currIdx = 1;
		let leftChildIdx = currIdx*2;
		let rightChildIdx = currIdx*2 + 1;

		let currChildIdx = this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[leftChildIdx] ? rightChildIdx : leftChildIdx;
		while (currChildIdx && this.heap[currIdx] > this.heap[currChildIdx]) {
			let currNode = this.heap[currIdx];
			let currChildNode = this.heap[currChildIdx];

			this.heap[currChildIdx] = currNode;
			this.heap[currIdx] = currChildNode;
		}
	}
}


const queue = new MinHeap();
const arry = [100,36,25,17,3,2,19,1,7];
for (let i in arry) {
	queue.insert(arry[i]);
}
console.log(JSON.stringify(queue.heap));
console.log(queue.remove());
