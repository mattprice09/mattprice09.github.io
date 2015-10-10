var source;
var dest;
var flow;
var capacity;

var edge = function(src, dest) {
	this.source = src;
	this.dest = dest;
	this.flow = 0.0;
	this.capacity = 0.0;
}

var edge = function(src, dst, flw, cap) {
	this.source = src;
	this.dest = dst;
	this.flow - flow;
	this.capacity = cap;
}

edge.prototype.addFlow = function(num) {
	this.flow += num;
}

// ~~~~~Getters and setters below here~~~~~
edge.prototype.getSource = function() {
	return this.source;
}

edge.prototype.setSource = function(country) {
	this.source = country;
}

edge.prototype.getDest = function() {
	return this.dest;
}

edge.prototype.setDest = function(country) {
	this.dest = country;
}

edge.prototype.getFlow = function() {
	return this.flow;
}

edge.prototype.setFlow = function(num) {
	this.flow = num;
}

edge.prototype.getCapacity = function() {
	return this.capacity;
}

edge.prototype.setCapacity = function(num) {
	this.capacity = num;
}