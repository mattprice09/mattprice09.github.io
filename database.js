var sdPairs = [];



var initData = function() {
	//var sd = JSON.parse(Assets.getText('SDpairs.json'));
	var currPair = [];

	// var AJAX_req = new XMLHttpRequest();
 //   AJAX_req.open( "GET", "SDpairs.json", true );
 //   AJAX_req.setRequestHeader("Content-type", "application/json");
 
 //   AJAX_req.onreadystatechange = function()
 //   {
 //       if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
 //       {
 //           var response = JSON.parse( AJAX_req.responseText );
 //           $.each(data['SDpairs'],function(doc) {
	// 			if (currPair == null) {
	// 				// If it is the first JSON to be read
	// 				currPair = [];
	// 				currPair.push(doc);
	// 			} else if (doc['SD Pair'] == currPair[0]['SD Pair']) {
	// 				// If the JSON is part of the same SD pair as currPair, push into currPair
	// 				currPair.push(doc);
	// 			} else {
	// 				// If it is a new SDpair as compared to currPair
	// 				sdPairs.push(currPair);
	// 				currPair = [];
	// 				currPair.push(doc);
	// 	}
	// });

 //       }
 //   }
 //   AJAX_req.send();


	$.getJSON("SDpairs.json", function(data) {
		
		console.log(data);
		$.each(data['SDpairs'],function(doc) {
			
		if (currPair == null) {
			// If it is the first JSON to be read
			currPair = [];
			currPair.push(doc);
		} else if (doc['SD Pair'] == currPair[0]['SD Pair']) {
			// If the JSON is part of the same SD pair as currPair, push into currPair
			currPair.push(doc);
		} else {
			// If it is a new SDpair as compared to currPair
			sdPairs.push(currPair);
			currPair = [];
			currPair.push(doc);
		}
	});
	});
	
	console.log(sdPairs[6][0]['Source']);


	// Create and push arrays of JSONs into sdPairs. Each array contains edges from the same SD Pair
	
}
