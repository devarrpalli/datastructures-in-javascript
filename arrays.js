function myArray() {
	this.array = [];
}


myArray.prototype.add = function(data) {
	this.array.push(data);
}


myArray.prototype.remove = function(data) {
	this.array = this.array.filter(function(current) {
		return current !== data;
	});
}


myArray.prototype.getIndexOf = function(data) {
	return this.array.indexOf(data);
}


myArray.prototype.getValAt = function(index) {
	return this.array[index];
}


myArray.prototype.print = function() {
	console.log(this.array.join(' '));
}


myArray.prototype.length = function() {
	return this.array.length;
}

	
var arr = new myArray();
arr.add(1);
arr.add(2);
arr.add(3);
console.log("//print current array after addition: 1 2 3");
arr.print(); 
arr.remove(4); 
arr.remove(3); 
console.log("//print current array after deletion: 4 3");
arr.print(); 
console.log("//print: getIndexOf(2)");
console.log(arr.getIndexOf(2)); 
console.log("//print: getValAt(0)");
console.log(arr.getValAt(0)); // 1
console.log("//print current array");
arr.print(); //	1 2
console.log("//print array length");
console.log(arr.length()); // 2
