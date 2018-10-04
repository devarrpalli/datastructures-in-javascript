'use strict'

let Queue = require('./Queue').Queue;

class Node {
	constructor(id) {
		this.id = id;
		this.adjacent = new Map();
	}
}

class Graph {
	constructor() {
		this.nodeLookUp = new Map();
	}

	addNode(id) {
		let n = new Node(id);
		this.nodeLookUp.set(id, n);
	}

	getNode(id) {
		return this.nodeLookUp.get(id);
	}


	addEdge(sId, dId) {
		let source = this.nodeLookUp.get(sId);
		let destination = this.nodeLookUp.get(dId)

		let childNodes = source.adjacent;
		if (childNodes.size === 0) {
			childNodes = [];
		} 

		childNodes.push(destination);
		source.adjacent = childNodes;
	}

	hasPathDFS(sId, dId) {	
		let source = this.nodeLookUp.get(sId);		
		let destination = this.nodeLookUp.get(dId);
		let visited = new Set();		
		return this.hasPathDFSUtil(source, destination, visited);
	}

	hasPathDFSUtil(source, destination, visited) {			
		if (visited.has(source.id)) {
			return false;
		}

		visited.add(source.id);
		if (source.id === destination.id) {
			return true;
		}

		let childNodes = source.adjacent;
		for (let node of childNodes) {
			if (this.hasPathDFSUtil(node, destination, visited)) {
				return true;
			}
		}		

		return false;
	}


	hasPathBFS(sId, dId) {
		let source = this.nodeLookUp.get(sId);
		let destination = this.nodeLookUp.get(dId);

		let nextToVisit = new Queue();
		nextToVisit.add(source);
		while (nextToVisit.length !== 0) {
			let node = nextToVisit.remove();

			if (node.id === destination.id) {
				return true;
			}

			let childNodes = node.adjacent;
			for (let child of childNodes) {
				nextToVisit.add(child);
			}
		}

		return false;
	}
}


// let myGraph = new Graph();
// myGraph.addNode('A');
// myGraph.addNode('B');
// myGraph.addNode('C');
// myGraph.addNode('D');
// myGraph.addNode('E');
// myGraph.addNode('F');

// myGraph.addEdge('A', 'B');
// myGraph.addEdge('A', 'D');
// myGraph.addEdge('A', 'E');
// myGraph.addEdge('B', 'C');
// myGraph.addEdge('D', 'E');
// myGraph.addEdge('E', 'F');
// myGraph.addEdge('E', 'C');
// myGraph.addEdge('C', 'F');

// console.log("myGraph.hasPathDFS(A,F)" + myGraph.hasPathDFS('A', 'F'));
// console.log("myGraph.hasPathBFS(A,F)" + myGraph.hasPathBFS('A', 'F'));


