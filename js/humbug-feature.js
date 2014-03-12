jQuery(document).ready(function() {
	
	var count = 0, 
		item_width = $('#carousel_inner ul li').outerWidth(),
		distance = 0,
		amount_slides = $('#carousel_inner ul li').size(),
		slides = ($('#carousel_inner ul li').size() - 1 );
	
	function movement(count) {
		$('#prev, #next').fadeIn();
		$('ul#tabNavigation li.current').removeClass('current');
		$('#carousel_inner ul li').removeClass('current');
		var distance = item_width*count ;
		$('#carousel_inner').animate({'left' : -distance }, function() {
			$('.current .animate-down').animate({
				top : 0
				}, 500, 'swing', function() {
			});
		
			$('.current .animate-up').animate({
					bottom : 30
				}, 500, 'swing', function() {
			});
		});
		$('#carousel_inner ul li').eq(count).addClass('current');
		$('ul#tabNavigation li').eq(count).addClass('current')
		
		if (count == 0 ) {
			$('#prev').fadeOut();
		}
		if (count == slides ) {
			$('#next').fadeOut();
		}
		
	}		
	
	$('#prev').hide();
	
	$('#next').click(function(){
		if (count >= 0 && count < slides ) {
			movement(++count);
		} 
	});
	
	$('#prev').click(function(){
		if (count <= slides && count >= 1 ) {
			movement(--count);
		} 
	});
	
	$('.info-text').hide();
	$(".info-icon").show();
	$('.info-icon').click(function() {
		$(".info-text").fadeToggle();
	});

	$(".carousel li:first").addClass("current");
	
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