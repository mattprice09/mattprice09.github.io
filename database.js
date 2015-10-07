var sdPairs = [];

var initData = function() {
	var currPair = [];

	$.getJSON("SDpairs.json", function(data) {
		
		console.log(data);
		console.log("Type of 'data': " + typeof data);

		for (var edge in data["SDpairs"]) {
			console.log(data["SDPairs"][edge]);
			console.log("Type of 'edge': " + typeof edge);
			if (currPair == null) {
				// If it is the first JSON to be read
				currPair = [];
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

		// $.each($.parseJSON(data["SDPairs"]), function(doc) {
		// 	console.log(doc);
		// 	if (currPair == null) {
		// 		// If it is the first JSON to be read
		// 		currPair = [];
		// 		currPair.push(doc);
		// 	} else if (doc['SD Pair'] == currPair[0]['SD Pair']) {
		// 		// If the JSON is part of the same SD pair as currPair, push into currPair
		// 		currPair.push(doc);
		// 	} else {
		// 		// If it is a new SDpair as compared to currPair
		// 		sdPairs.push(currPair);
		// 		currPair = [];
		// 		currPair.push(doc);
		// 	}
		// });
	});

	console.log(sdPairs[6][0]['Source']);

	// Create and push arrays of JSONs into sdPairs. Each array contains edges from the same SD Pair
	
}
