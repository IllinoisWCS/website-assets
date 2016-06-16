/* For nav bar resizing purposes. */
$(document).on("scroll", function() {
	console.log("I'm scrolling!");
	if ($(document).scrollTop()  > 75) {
		console.log("I should be shrinkin!");
	    $("nav").addClass("navbar-small");
    } else {
        $("nav").removeClass("navbar-small");
    }
});