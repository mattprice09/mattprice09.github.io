var sdPairs = [];
var currPair = [];
var db = this;

var initData() = function() {
	// Create and push arrays of JSONs into sdPairs. 
	// Each array contains edges from the same SD Pair
	$.getJSON("SDpairs.json", function(data) {
		
		for (var element in data["SDpairs"]) {
			var edge = data["SDpairs"][element];

			if (db.currPair.length == 0) {
				// If it is the first JSON to be read
				db.currPair.push(edge);
			} else if (edge['SD Pair'] == db.currPair[0]['SD Pair']) {
				// If the JSON is part of the same SD pair as currPair, push into currPair
				db.currPair.push(edge);
			} else {
				// If it is a new SDpair as compared to currPair
				db.sdPairs.push(db.currPair);
				db.currPair = [];
				db.currPair.push(edge);
			}
		}
		db.sdPairs.push(db.currPair);
	});
	console.log(db.sdPairs.length);
	console.log(db.currPair.length);
}