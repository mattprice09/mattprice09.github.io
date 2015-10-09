var sdPairs = [];

var initData = function() {
	var currPair = [];

	// Create and push arrays of JSONs into sdPairs. 
	// Each array contains edges from the same SD Pair
	$.getJSON("SDpairs.json", function(data) {
		
		//var str = JSON.stringify(data);
		//var json = JSON.parse(str);

		for (var name in data["SDpairs"]) {
			var edge = data["SDpairs"][name];

			if (currPair.length == 0) {
				// If it is the first JSON to be read
				currPair.push(edge);
			} else if (edge['SD Pair'] == currPair[0]['SD Pair']) {
				// If the JSON is part of the same SD pair as currPair, push into currPair
				currPair.push(edge);
			} else {
				// If it is a new SDpair as compared to currPair
				sdPairs.push(currPair);
				currPair = [];
				currPair.push(edge);
			}
		}
		sdPairs.push(currPair);
	});

	console.log(sdPairs.length);
	console.log(currPair.length);

	
	
}
