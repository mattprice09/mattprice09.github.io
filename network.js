var edges = [];
var nodes = [];
var n = 196;
var isActive;

// Network constructor
var network = function(arr) {
	this.createNetwork();
	var src;
	var dst;
	var flw;
	var cap;
	// Assign flow and capacity to edges
	for (var i = 0; i < arr.length; i++) {
		src = parseFloat(namesMap[arr[i]['Source']]);
		dst = parseFloat(namesMap[arr[i]['Dest']]);
		flw = parseFloat(arr[i]['Flow']);
		cap = parseFloat(arr[i]['Capacity']);
		console.log(src);
		console.log(dst);
		console.log(flw);
		console.log(cap);
		edges[src][dst].addFlow(flw);
		edges[src][dst].setCapacity(cap);
	}

	this.isActive = false;
}

// Instantiate the nodes and edges
network.prototype.createNetwork = function() {
	for (var i = 0; i < this.n; i++) {
		this.nodes.push(new node(namesArr[i]));
		this.edges[i]= new Array(this.n);
		for (var j = 0; j < this.n; j++) {
			this.edges[i][j] = new edge(i, j);
		}
	}
}

// ~~~~~Getters and setters below here~~~~~
network.prototype.getN = function() {
	return this.n;
}

network.prototype.getEdges = function() {
	return this.edges;
}

network.prototype.getNodes = function() {
	return this.nodes;
}

network.prototype.networkShowing = function() {
	return this.isActive;
}

network.prototype.setActivityState = function(boo) {
	this.isActive = boo;
}