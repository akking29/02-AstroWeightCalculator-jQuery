//create onclick function thats called when calculate button is pressed to perform calculation

function calc(){ 

	var userWeight = $('#userWeight').val(); 
	//get user input value
	console.log(userWeight);
	//test if its working
	var userSelect = $('#planet').val();
	//get user selection (value) from option
	var planetSelect = $('#planet option:selected').text();

	switch(planetSelect) {
		case "Sun":
		case "Moon":
			planetSelect = "the " + planetSelect;
			break;
		default: break;
	}

	$('#answer').html('If you were on ' + planetSelect + ' you would be ' + userWeight * userSelect + ' pounds.');
	// perform calculation and display in 'answer <p>'
	
}
