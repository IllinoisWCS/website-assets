/* For nav bar resizing purposes. */
$(document).on("scroll", function() {
	if ($(document).scrollTop()  > 75) {
	    $("nav").addClass("navbar-small");
    } else {
        $("nav").removeClass("navbar-small");
    }
});

$('.carousel').carousel({
	interval: 2500
});

/* For smooth scrolling on the website. */
$(".page-scroll").on("click", function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - 50
	}, 1000);
});


/* For parallax effect for the sector bg. */
$(document).ready(function(){
	$('section.officers').each(function(){
		var $bg = $(this);
		
    $(window).scroll(function() {
			var pos = -($(window).scrollTop() / $bg.data('speed'));
			var coords = '100% '+ pos + 'px';
			$bg.css({ backgroundPosition: coords });
		});
	});
});