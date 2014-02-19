/* Preloader
================================================== */
$(window).load(preLoader);
function preLoader() {
	setTimeout(function() {
		$("#preloader").delay(250).fadeOut({
			duration: 750,
		});
	}, 250);
}

$(document).ready(function(){

	/* Enable Touch in PageSlide 
	================================================== */
	$('body').on('touchmove', function (e) {
		if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
	});
	
	/* Fullwidth and height intro
	================================================== */
	$(function(){
		var windowH = $(window).height();
		var wrapperH = $('.full').height();
		if(windowH > wrapperH) {                            
			$('.full').css({'height':($(window).height())+'px'});
		}                                                                               
		$(window).resize(function(){
			var windowH = $(window).height();
			var wrapperH = $('.full').height();
			var differenceH = windowH - wrapperH;
			var newH = wrapperH + differenceH;
			var truecontentH = $('.truecontent').height();
			if(windowH > truecontentH) {
				$('.full').css('height', (newH)+'px');
			}
		})          
	});

	
	/* Responsive Menu
	================================================== */
    $('#mobile-menu').sidr({
		name: 'sidr-main',
		source: '.header',
		renaming: false
    });

	/* Parallax Elements
	================================================== */
	$('.home').parallax("50%", 0.2);
	$('.services').parallax("50%", 0.3);
	$('.buynow').parallax("50%", 0.05);
	$('.post_header').parallax("50%", 0.3);

	/* Close Sidr after click on page content
	================================================== */
	$('#main, footer').click(function(){
		$.sidr('close', 'sidr-main');
	});
	
	/* PageSlide Modal Portfolio Page	
	================================================== */
	$(".page").pageslide({
		direction: "left",
		modal: true,
		iframe: false
	});
	
	/* Fancy Select
	================================================== */
	$('.budget').fancySelect();
	
	/* Window Scrolling
	================================================= */
	var $scrllink = $('.scrollink');
	$scrllink.scrollTo({ 
		offset: -60,
		speed: 600
	});
	if ($(window).width() < 768) {
		$scrllink.scrollTo({ 
			offset: 0,
			speed: 600
		});
	}
	
	/* Fade elements while scrolling
	================================================= */
	jQuery(function($) {
		var divs = $('.fade-that');
		$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			divs.css({ 
				'opacity' : 1 - st/500
			}); 
		});
	});
	
});// End of doc ready

	
$(window).load(function() {

	/* Isotope Portfolio
	================================================= */
	var $container = $('#portfolio-container');

	$container.isotope({
		resizable: false,
		itemSelector : ".item",
		masonry : {
			columnWidth : 1,
			gutterWidth: 1,
		}
		
	});

	var $optionSets = $('.option-set'),
			$optionLinks = $optionSets.find('li');

	$optionLinks.click(function() {
		var $this = $(this);
		if ($this.hasClass('selected')) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	});

	$('#filters').on('click', 'a', function() {
		var selector = $(this).data('filter');
		$container.isotope({filter: selector});

	});
	
	$(window).resize(function(){
		$('#portfolio-container').isotope('reLayout');
	});

});

$(window).resize(function(){

	/* Centering elements horizontally and vertically
	================================================= */
	$('#intro').css({
		position:'absolute',
		left: ($(window).width() - $('#intro').outerWidth())/2,
		top: ($(window).height() - $('#intro').outerHeight())/2
	});
	
	$('#footer').css({
		position:'fixed',
		left: ($(window).width() - $('#footer').outerWidth())/2,
		top: ($(window).height() - $('#footer').outerHeight())/2
	});
	
	/* Close Sidr menu when window is resized
	================================================= */
	$.sidr('close', 'sidr-main');
	
	/* Animations 
	================================================= */
	//if ($(window).width() > 1024) {

	//}
	
	if(!jQuery.browser.mobile) {
		$(function() {

			
			// Team Members
			$('.team_member').appear();

			$(document.body).on('appear', '.team_member', function() {
				$(this).addClass('animated');
			});
			
			// Services
			$('.services .services_list ul li').appear();

			$(document.body).on('appear', '.services .services_list ul li', function() {
				$(this).addClass('animated');
			});
			
			// Portfolio
			$('.item').appear();

			$(document.body).on('appear', '.item', function() {
				$(this).addClass('animated');
			});
			
			// Contact
			$('.field').appear();

			$(document.body).on('appear', '.field', function() {
				$(this).addClass('animated');
			});
			
		});
	}
	else{
		$('.field').addClass('animated');
	}

});

// To initially run the function:
$(window).resize();