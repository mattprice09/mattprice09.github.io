var activePairs = [];

// I NEED TO UPDATE THIS WITH THE REMOVAL OF sdPairs ARRAY

// Imports data into the legend
var loadLegend = function() {
	var pairDiv;
	var pairArr;
	var name = "";

	// Iterate through all SD pairs and create divs in legend
	for (var i = 0; i < sdPairs.length; i++) {
		pairArr = sdPairs[i];
		name = pairArr[0]['SD Pair'];

		pairDiv = document.createElement("div");
		pairDiv.setAttribute("id", name);

		document.getElementById("legend").appendChild(pairDiv);
		document.getElementById(name).innerHTML = name;
		document.getElementById(name).className = "legendPairClass";
		document.getElementById(name).onClick = "processSDClick(name)";

		activePairs.push(false);
	}
}

// The function to be called when a legend element is clicked
function processSDClick(name) {
	console.log(name);

	// if (activePairs[num] == false) {
	// 	// If the SD pair data is not currently active on the map
	// } else {
	// 	// If the SD pair data is active on the map
	// }
}