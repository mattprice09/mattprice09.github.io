var loadLegend = function() {
	var pair;
	for (sdPair in sdPairs) {
		pair = document.createElement("div");
		pair.setAttribute("id", sdPair[0]["SD Pair"]);
		pair.className("legendPairClass");
		pair.onClick = function() {
			// Add Map updates here
		}; 
		document.getElementById(sdPair[0]["SD Pair"]).innerHTML = sdPair[0]["SD Pair"];
		document.getElementByID("legend").appendChild(pair);
	}
}