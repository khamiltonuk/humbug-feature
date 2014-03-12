$(document).ready(function() {

	$('.info-text').hide();
	$(".info-icon").show();
	$('.info-icon').click(function() {
		$(".info-text").fadeToggle();
	});

	$(".carousel li:first").addClass("current");

	$(".carousel").jCarouselLite({
		btnNext : ".next, .bold-black",
		btnPrev : ".prev",
		visible : 1,
		//circular: false,

		afterEnd : function(a) {
			$('.current .animate-down').animate({
				top : 0
			}, 500, 'swing', function() {
			});

			$('.current .animate-up').animate({
				bottom : 0
			}, 500, 'swing', function() {
			});
		}
	});
	
	jQuery("a.sneak-a-peak, .once").click(function() {
		jQuery('.plus-sign').css('backgroundPosition', '0px 29px');
		jQuery('.lightbox').css('opacity', '0.5');
		jQuery(".lightbox, .lightbox-panel").fadeIn(300);
	});
	jQuery(".lightbox, .lightbox-panel, .clickable").click(function() {
		jQuery('.plus-sign').css('backgroundPosition', '0px 0px');
		jQuery(".lightbox, .lightbox-panel").fadeOut(300);
	});
	jQuery(".once").toggle(function() {
		jQuery('.plus-sign').css('backgroundPosition', '0px 29px');
		jQuery('.lightbox').css('opacity', '0.5');
		jQuery(".lightbox, .lightbox-panel").fadeIn(300);
	}, function() {
		jQuery('.plus-sign').css('backgroundPosition', '0px 0px');
		jQuery(".lightbox, .lightbox-panel").fadeOut(300);
	}); 

});
