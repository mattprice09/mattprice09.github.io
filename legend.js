var activePairs = [];

// Imports data into the legend
var loadLegend = function() {
	var pair;
	var name = "";
	var num = 0;

	// Iterate through all SD pairs and create divs in legend
	for (var sdPair in sdPairs) {
		pair = document.createElement("div");
		name = sdPair[0]['SD Pair'];
		pair.setAttribute("id", name);

		console.log(sdPair);
		console.log(sdPairs);

		document.getElementById("legend").appendChild(pair);
		document.getElementById(name).innerHTML = name;
		document.getElementById(name).className = "legendPairClass";
		document.getElementById(name).onClick = "processSDClick()";

		activePairs.push(false);
		num++;
	}
	console.log("Number of times loadLegend for loop ran: " + num);
}

// The function to be called when a legend element is clicked
function processSDClick(sdPair) {
	if (activePairs[num] == false) {
		// If the SD pair data is not currently active on the map
	} else {
		// If the SD pair data is active on the map
	}
}