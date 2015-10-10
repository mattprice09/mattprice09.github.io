var activePairs = [];

function loadLegend() {
	var pair;
	var num = 0;
	for (sdPair in sdPairs) {
		pair = document.createElement("div");
		pair.setAttribute("id", sdPair[0]["SD Pair"]);

		document.getElementById("legend").appendChild(pair);
		document.getElementById(sdPair[0]["SD Pair"]).innerHTML = sdPair[0]["SD Pair"];
		document.getElementById(sdPair[0]["SD Pair"]).className = "legendPairClass";
		document.getElementById(sdPair[0]["SD Pair"]).onClick = "processSDClick()";

		activePairs.push(false);
		num++;
	}
	console.log("Number of times loadLegend for loop ran: " + num);
}

function processSDClick(sdPair) {
	if (activePairs[num] == false) {
		// If the SD pair data is not currently active on the map
	} else {
		// If the SD pair data is active on the map
	}
}