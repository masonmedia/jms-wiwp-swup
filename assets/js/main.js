//swup init
$(document).ready(function() {
    const swup = new Swup({
        doScrollingRightAway: false,
        animateScroll: false,
        scrollFriction: .3,
        scrollAcceleration: .04
    //    scrollAcceleration: 0
    });
});

//init AOS library
$(document).ready(function() {
    AOS.init();
});

//close mobile nav on click
$('.nav-link, body').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});

//smooth scroll https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
$(document).ready(function() {
    $('a[href*="#"]').on('click', function (e) {
	   e.preventDefault();

	   $('html, body').animate({
		  scrollTop: $($(this).attr('href')).offset().top
	   }, 500, 'linear');
    });
});
