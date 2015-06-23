$(document).ready(function() {
	var officers = {
		"officers": [
			{
				"position": "President",
				"name": "Annie Rong",
				"email": "rong2@illinois.edu",
				"year": "Senior",
				"major": "Computer Science, Minor in Art and Design",
				"interests": ["Human Computer Interaction", "Distributed Systems"],
				"experience": [
					"JPMorgan, Applications Developer Intern, Summer 2013 & 2014",
					"UIUC, CS242 TA, Spring 2015",
					"UIUC, NCSA SPIN Intern, Spring 2015",
					"Twitter, Software Development Intern, Summer 2015"
				],
				"fun fact": "I still play Neopets more often than I care to admit."
			}
		]
	}

	var output = Mustache.render($('#officerTemplate').html(), officers);
	$('#allOfficers').html(output);
});