$(document).ready(function() {
	var officers = {
		"prez": [
	    {
	      "position": "President",
	      "firstname": "Annie",
	      "lastname": "Rong",
	      "email": "rong2@illinois.edu",
	      "netid": "rong2",
	      "year": "Senior",
	      "major": "CS in ENG, Minor in Art + Design",
	      "interests": "Distributed Systems, HCI",
	      "experience": "JPMorgan, Applications Developer Intern, Summer 2013 & 2014\nUIUC, CS242 TA, Spring 2015\nUIUC, NCSA SPIN Intern, Spring 2015\nTwitter, Software Development Intern, Summer 2015",
	      "hobbies": "Binge drinking coffee, Coding, Drawing",
	      "fact": "I still play Neopets more often than I care to admit. ",
	      "place": "Urbana, USA"
	    },
	    {
	      "position": "Vice President",
	      "firstname": "Hanna",
	      "lastname": "Koh",
	      "email": "hxkoh2@illinois.edu",
	      "netid": "hxkoh2",
	      "year": "Senior",
	      "major": "Major: CS in ENG\nMinor: Business",
	      "interests": "Artificial Intelligence, Security, UI/UX",
	      "experience": "Microsoft, Software Engineering Intern, May-Aug 2015;\nMicrosoft, Explore Intern, May-Aug 2014;\nUIUC, Independent Study with Professor Heeren, 2014-present;\nUIUC, Independent Study with Professor Angrave, 2013-2014\n",
	      "hobbies": "Playing with dogs :);\nWatching TV;\nPiano",
	      "fact": "I have a twin sister!",
	      "place": "Foster City, CA"
	    }
	  ],
	  "admin": [
	    {
	      "position": "Secretary",
	      "firstname": "Lily",
	      "lastname": "Sellers",
	      "email": "lseller2@illinois.edu",
	      "netid": "lseller2",
	      "year": "Senior",
	      "major": "Double Major in CS + Statistics, Psychology",
	      "interests": "Artificial Intelligence",
	      "experience": "Summer 2013 Technical Intern Foresight ROI \nSummer 2014 Software Intern Apollo Education Group\n2014-2015 CITES Helpdesk Consultant",
	      "hobbies": "Video Games (LoL, Pokemon, various RPGs)\nViolin\nPlaying with my 3 cats (and the 2 other cats that live with us)\nSleeping\nPizza",
	      "fact": "I am a black belt in Tae-Kwon-Do, and am also a certified scuba diving instructor. ",
	      "place": "Barrington, IL"
	    },
	    {
	      "position": "Treasurer",
	      "firstname": "Han",
	      "lastname": "Chen",
	      "email": "hanchen2@illinois.edu",
	      "netid": "hanchen2",
	      "year": "Junior",
	      "major": "CS in ENG",
	      "interests": "Data Structures, Algorithms, and Security",
	      "experience": "CS 225 Teaching Assistant",
	      "hobbies": "Playing computer games, Building PCs, Watching Netflix/animes, Sleeping",
	      "fact": "I lived in Canada for 7 months.",
	      "place": "Arlington Heights, USA"
	    },
	    {
	      "position": "Webmaster",
	      "firstname": "Emily",
	      "lastname": "Chao",
	      "email": "elchao2@illinois.edu",
	      "netid": "elchao2",
	      "year": "Junior",
	      "major": "CS in ENG",
	      "interests": "Full-Stack Web Development, CS Education and Educational Tools, Software Engineering, Data",
	      "experience": "Paycor Inc., IT Application Intern, Summer 2012\nP&G, GBS-HRSS IT Intern, Summer 2013\nkCura, Software Engineering Intern, Summer 2014\nDow Chemical Company, Systems Intern, School-Year 2014-2015\nIntuit, Software Engineering Intern, Summer 2015",
	      "hobbies": "Listening to Music, Singing at the top of my lungs, Reading, Writing, Going Ice Skating, Web Development",
	      "fact": "I have a broken nose that has yet to be fixed. So yes, I need a nose job. :)",
	      "place": "West Chester, OH"
	    }
	   ],
	   "chair": [
	    {
	      "position": "Academic Chair",
	      "firstname": "Robin",
	      "lastname": "Sturm",
	      "email": "rsturm2@illinois.edu",
	      "netid": "rsturm2",
	      "year": "Junior",
	      "major": "Computer Science in Engineering",
	      "interests": "HCI, Data Mining, Security",
	      "experience": "Thomas Jefferson High School, Teaching Assistant, Summer 2011\nCapitol Information Group, IT Intern, Summers 2011-2014\nUniversity of Illinois, Teaching Assistant, 2015-current\nQuantlab Financial, Technology Intern, Summer 2015",
	      "hobbies": "Writing, reading comic books, watching movies and TV shows.",
	      "fact": "I have an amazing memories but I waste it all on movie quotes and actors' filmographies.",
	      "place": "McLean, Virginia"
	    },
	    {
	      "position": "Outreach Chair",
	      "firstname": "Brianna",
	      "lastname": "Ifft",
	      "email": "bifft2@illinois.edu",
	      "netid": "bifft2",
	      "year": "Junior",
	      "major": "CS in ENG\nLinguistics Minor",
	      "interests": "NLP",
	      "experience": "State Farm Research and development Center, Champaign, IL\nSystems Intern\nAugust 2013 - May 2014\n\nBank of America, Chicago, IL\nTechnology Developer and Analyst\nSummer 2014",
	      "hobbies": "Running, Cooking, Hanging out with friends and family",
	      "fact": "I have a huge family--between 40 and 50 first cousins!",
	      "place": "Forrest, IL US"
	    },
	    {
	      "position": "Mentoring Chair",
	      "firstname": "Vaishali",
	      "lastname": "Khandelwal",
	      "email": "vkhande2@illinois.edu",
	      "netid": "vkhande2",
	      "year": "Junior",
	      "major": "Computer Science in ENG",
	      "interests": "Databases, System Programming",
	      "experience": "Place : Tata Consultancy Services, Kolkata India \nYear : Summer 2014\nPosition : Developer\n\nPlace: Microsoft\nYear: Upcoming Summer\nPosition : Intern",
	      "hobbies": "Dancing, Reading, Interacting with new people ",
	      "fact": "Dance is my stress buster! I absolutely love dancing, which includes dancing between coding if needed to destress! ",
	      "place": "Champaign"
	    }
	  ],
	  "chair2": [
	    {
	      "position": "Tech Team Chair",
	      "firstname": "Sara",
	      "lastname": "Akgul",
	      "email": "akgul1@illinois.edu",
	      "netid": "akgul1",
	      "year": "Junior",
	      "major": "Computer Engineering",
	      "interests": "Embedded Systems, Operating Systems, Security",
	      "experience": "GNU/Linux OS Dev Intern at CoreOS, starting Summer 2015,\nBIOS Development Intern at Intel, August 2013 - June 2014,\nAnalog Verification Intern at Intel, June 2012 - January 2013,\nECE 110 Teaching Assistant, UIUC, August 2011 - May 2012,\nComputer Engineering Co-op at AMD, May 2011 - August 2011,\nWeb R&D Intern at Wolfram, December 2010 - April 2011,\nParticle Physics Research Mentorship, Fermilab, August 2008 - May 2010\nITS Lead Student Hardware Technician, IMSA, November 2008 - May 2010\n",
	      "hobbies": "Playing with circuits, developing cool software and hardware, singing, guitar, E&M music, teaching, math, graphic design, competitive dance games, figure skating, and more that I couldn't possibly list! :)",
	      "fact": "I currently own and maintain 5 Dance Dance Revolution style arcade machines, which are all privately shared or generate revenue in public venues. I like to play on them too, of course! ",
	      "place": "Seattle, WA"
	    },
	    {
	      "position": "Social Chair",
	      "firstname": "Jennifer",
	      "lastname": "Cheng",
	      "email": "jrcheng3@illinois.edu",
	      "netid": "jrcheng3",
	      "year": "Junior",
	      "major": "CS in ENG",
	      "interests": "Graphics, Data, HCI",
	      "experience": "BTwin (Lille, France)\nTest Engineer Intern\nJuly 2014",
	      "hobbies": "looking at puppies on the internet\nplaying cards\nbaking",
	      "fact": "I like cats but I'm allergic to them :(",
	      "place": "Barrington, IL, USA"
	    },
	    {
	      "position": "Corporate Chair",
	      "firstname": "Corly",
	      "lastname": "Leung",
	      "email": "cyleung2@illinois.edu",
	      "netid": "cyleung2",
	      "year": "Sophomore",
	      "major": "CS in ENG",
	      "interests": "Security, AI",
	      "experience": "State Farm (IT/System Intern) Nov 2013 - Dec 2014\nGroupon (SWE Intern) Summer 2015",
	      "hobbies": "Badminton, Napping, Playing the flute",
	      "fact": "I had a British passport, but I have never been to England",
	      "place": "Champaign"
	    }
	  ],
	  "chair3": [
	    {
	      "position": "Publicity Chair",
	      "firstname": "Madeline",
	      "lastname": "Psenka",
	      "email": "psenka2@illinois.edu",
	      "netid": "psenka2",
	      "year": "Junior",
	      "major": "Computer Science ENG",
	      "interests": "Big Data, UI/UX, Web Development, Computer Graphics",
	      "experience": "University of Illinois - Micro and Nanotechnology Laboratory, Reserach Intern, Summer 2014; CME Group, Development Intern, Summer 2015; NCSA, Undergraduate Research Assistant, Fall 2015",
	      "hobbies": "Writing, Cooking, Playing Volleyball, Listening to Music, Hanging with Friends",
	      "fact": "I have a mild phobia of fish.",
	      "place": "Chicago, IL"
	    },
	    {
	      "position": "Alumni Chair",
	      "firstname": "Manasa",
	      "lastname": "Sanka",
	      "email": "sanka3@illinois.edu",
	      "netid": "sanka3",
	      "year": "Sophomore",
	      "major": "Computer Science in ENG",
	      "interests": "Artificial Intelligence and Machine Learning",
	      "experience": "Previous:\nAarki, Inc - Business Development Intern - June to August 2012\nPeel Technologies - Engineering Intern - June to August 2013\nUpcoming:\nZeta Interactive - Engineering Intern - June to August 2015",
	      "hobbies": "Drawing portraits, singing, piano, tennis, reading books, biking, writing ",
	      "fact": "I love singing obnoxiously in empty elevators and pretending nothing happened when someone enters. ",
	      "place": "Cupertino, CA, USA"
	    },
	    {
	      "position": "Grad Chair",
	      "firstname": "Namrata",
	      "lastname": "Prabhu",
	      "email": "nprabhu2@illinois.edu",
	      "netid": "nprabhu2",
	      "year": "Grad",
	      "major": "B.S/M.S Computer Science",
	      "interests": "Computer Vision",
	      "experience": "Previous - Undergrad TA for CS 173\nCurrent - Grad TA for CS 242\nComputer Vision Research with Derek Hoeim",
	      "hobbies": "Cooking , Reading , android development, volunteering ",
	      "fact": "I do math in my head using an imaginary abacus. ",
	      "place": "Bangalore,India"
	    }
	  ]
	}

	var output = Mustache.render($('#officerTemplate').html(), officers);
	$('#allOfficers').html(output);
});