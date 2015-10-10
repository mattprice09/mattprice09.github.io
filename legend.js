// I NEED TO UPDATE THIS WITH THE REMOVAL OF sdPairs ARRAY

// Imports data into the legend
var loadLegend = function() {
	var pairDiv;
	var pairArr;
	var name = "";

	// Iterate through all SD pairs and create divs in legend
	for (var i = 0; i < networks.length; i++) {
		name = networks[i].getPairId();

		pairDiv = document.createElement("div");
		pairDiv.setAttribute("id", name);

		document.getElementById("legend").appendChild(pairDiv);
		document.getElementById(name).innerHTML = name;
		document.getElementById(name).className = "legendPairClass";
		document.getElementById(name).onClick = "processSDClick(name)";

	}
}

// The function to be called when a legend element is clicked
function processSDClick(name) {
	console.log(name);
}