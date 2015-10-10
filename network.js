var edges = [];
var nodes = [];
var n = 196;

// Network constructor
var network = function(arr) {
	createNodes();
	for (int i = 0; i < this.n; i++) {
		for (int j = 0; j < this.n; j++) {

		}
	}
}

// Instantiate the nodes array
network.prototype.createNodes = function() {
	for (int i = 0; i < this.n; i++) {
		this.nodes.push(new node(namesArr[i]));
	}
}

// ~~~~~Getters and setters below here~~~~~
network.prototype.getN = function() {
	return this.n;
}