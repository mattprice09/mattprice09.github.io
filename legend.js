var activePairs = [];

// Imports data into the legend
var loadLegend = function() {
	var pair;
	var element;
	var name = "";

	// Iterate through all SD pairs and create divs in legend
	for (var i = 0; i < sdPairs.length; i++) {
		element = sdPairs[i];
		pair = document.createElement("div");
		name = element[0]['SD Pair'];
		pair.setAttribute("id", name);

		console.log(element);
		console.log(name);
		//console.log(sdPairs);

		document.getElementById("legend").appendChild(pair);
		document.getElementById(name).innerHTML = name;
		document.getElementById(name).className = "legendPairClass";
		document.getElementById(name).onClick = "processSDClick()";

		activePairs.push(false);
	}
}

// The function to be called when a legend element is clicked
function processSDClick(sdPair) {
	if (activePairs[num] == false) {
		// If the SD pair data is not currently active on the map
	} else {
		// If the SD pair data is active on the map
	}
}