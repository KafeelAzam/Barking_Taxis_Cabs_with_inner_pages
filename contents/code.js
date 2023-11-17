$(window).on('load', function(){
	$('.booking-form').css({
		animationName: 'booking_form_anim'
	});
	$('.booking-form').on('animationend webkitAnimationEnd', function() { 
		$(this).css('opacity', '1');
	});
});

$(document).ready(function() {

	window.onscroll = function(){scrollfunc1()};

	function scrollfunc1(){
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			$('#navbar').css({
				backgroundColor: '#ffffff',
				boxShadow: '0 0 5px #153244'
			});
		}
		else {
			$('#navbar').css({
				backgroundColor: 'rgba(255, 255, 255, .6)',
				boxShadow: 'none'
			});
		}
	}


	$('.main-service-div').hover(function() {
		$('.main-service-div').not(this).css('opacity', '.6');
	}, function() {
		$('.main-service-div').css('opacity', '1');
	});


	$('.main-airport-div').hover(function() {
		$(this).find('.airport-imgs-div').css('background-color', 'transparent');
	}, function() {
		$(this).find('.airport-imgs-div').css('background-color', '#F1F1F1');
	});


	$('.station-imgs-div').hover(function() {
		$('.station-imgs-div').not(this).css('opacity', '.4');
		$(this).find('.station-imgs').css('transform', 'rotateY(360deg)');
	}, function() {
		$('.station-imgs-div').css('opacity', '1');
		$(this).find('.station-imgs').css('transform', 'none');
	});


	$('.social-icons-link').hover(function() {
		$(this).find('.social-icons-div').css('background-color', 'transparent');
		$(this).find('.social-icons').css('filter', 'invert(1)');
	}, function() {
		$(this).find('.social-icons-div').css('background-color', '#32CFAA');
		$(this).find('.social-icons').css('filter', 'none');
	});


	$('.all-fleet-divs').hover(function() {
		$(this).find('.fleet-imgs').css('transform', 'rotateY(180deg)');
	}, function() {
		$(this).find('.fleet-imgs').css('transform', 'none');
	});
	
	
	
});