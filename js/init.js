$(document).ready(function() {

	var frame = $('.carousel'),//this.options.frame,
		sliding_bit = frame.find('ul'),
		slides_panes = sliding_bit.find('li'),
		number_of_slides = slides_panes.length,
		slide_width = sliding_bit.find('li:first').width(),
		sliding_bit_width = number_of_slides * slide_width,
		count = 0,
		arrows = $('.arrows'),
		distance = 0;

	sliding_bit.css({
		'width': sliding_bit_width
	});
	slides_panes.eq(0).addClass('current');


	function openMenu() {
		frame.on('click', function (e) {
			if (e.target.id == "next") {
				$('.humbug li:last').after($('.humbug li:first'));
				movement(++count);

			}
			if (e.target.id == "prev") {
				$('.humbug li:first').before($('.humbug li:last'));
				movement(--count);

			}
			if (e.target.id == "info"){
				$('.info-text').toggleClass('hide');
			}
			if (e.target.id == "plus-more" || e.target.id == 'lightbox' || e.target.id == 'lightbox-panel'){
				$('.plus-sign').toggleClass('active');
				$('#lightbox').toggleClass('hide');
			}
		});
	}
	openMenu();

	function movement(count) {

        //this.resetCarouselBeforeMovement();


		//arrows.removeClass('disable');

        var distance = slide_width * count;
		slides_panes.removeClass('current');



        sliding_bit.stop(true,true).animate({
            //'left': -distance
        },function(){

			//slides_panes.eq(1).addClass('current');
			slides_panes.eq(count).addClass('current');
			console.log(count)
;		});

    }


/*"a.sneak-a-peak, .once").click(function() {
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
	});*/

});
