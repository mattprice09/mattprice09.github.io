var name = "";
var inDegree = "";
var outDegree = "";

var coords = "";

var node = function(name) {
	this.name = name;
}

// ~~~~~Getters and setters below here~~~~~
node.prototype.getName = function() {
	return this.name;
}

node.prototype.setName = function(str) {
	this.name = str;
}

node.prototype.getCoords = function() {
	return this.coords;
}

node.prototype.setCoords = function(str) {
	this.coords = str;
}