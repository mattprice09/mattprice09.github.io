var sdPairs = [];

// Create and push arrays of JSONs into sdPairs. 
// Each array contains edges from the same SD Pair
function initData() {

	$.getJSON("SDpairs.json", function(data) {		
		initialize(data);
	});
}

// Callback function for initData()
function initialize(data) {
	var currPair = [];

	var num = 0;
	for (var element in data["SDpairs"]) {
		var edge = data["SDpairs"][element];

		if (currPair.length == 0) {
			// If it is the first JSON to be read
			currPair.push(edge);
			num++;
		} else if (edge['SD Pair'] == currPair[0]['SD Pair']) {
			// If the JSON is part of the same SD pair as currPair, push into currPair
			currPair.push(edge);
		} else {
			// If it is a new SDpair as compared to currPair
			sdPairs.push(currPair);
			currPair = [];
			currPair.push(edge);
			num++;
		}
	}
	sdPairs.push(currPair);

	loadLegend();
}