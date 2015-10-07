var sdPairs = [];

var initData = function() {
	var currPair = [];

	$.getJSON("SDpairs.json", function(data) {
		
		var str = JSON.stringify(data);
		var json = JSON.parse(str);
		console.log(json);
		console.log("Type of 'json': " + typeof json);

		// for (var i = 0; i < json["SDpairs"].length; i++) {
		// 	console.log(json["SDPairs"][i]);
		// 	console.log("Type of 'edge': " + typeof json["SDpairs"][i]);
		// 	if (currPair == null) {
		// 		// If it is the first JSON to be read
		// 		currPair = [];
		// 		currPair.push(json["SDPairs"][i]);
		// 	} else if (json["SDPairs"][i]['SD Pair'] == currPair[0]['SD Pair']) {
		// 		// If the JSON is part of the same SD pair as currPair, push into currPair
		// 		currPair.push(json["SDPairs"][i]);
		// 	} else {
		// 		// If it is a new SDpair as compared to currPair
		// 		sdPairs.push(currPair);
		// 		currPair = [];
		// 		currPair.push(json["SDPairs"][i]);
		// 	}
		// }

		for (var name in json["SDpairs"]) {
			var edge = json["SDpairs"][name];
			
			console.log(json["SDPairs"][edge]);
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
