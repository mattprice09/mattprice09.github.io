var networks = [];
var namesArr = [];
var namesMap = {};
//var sdPairs = [];

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

	$.getJSON("CountryNames.json", function(names) {
		assignCountryNames(names);
	});

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
			//sdPairs.push(currPair);
			makeNetwork(currPair);
			currPair = [];
			currPair.push(edge);
			num++;
		}
	}
	makeNetwork(currPair);
	//sdPairs.push(currPair);

	//loadLegend();
}

// Instantiate and populate the networks array with data
function makeNetwork(arr) {
	var net = new network(arr);
	networks.push(net);
}

// Assign country names to global names array and map
function assignCountryNames(json) {
	var num = 0;
	for (var element in json["Names"]) {
		var name = json["Names"][element];
		namesArr.push(name['Name']);
		namesMap[name['Name']] = num;
		console.log(typeof namesMap[name['Name']]);
		num++;
	}
}