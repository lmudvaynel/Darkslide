$(document).ready(function(){
	
	var centerHeight = $('#center .page-wrapper').height();
	$('#center').height(centerHeight);
	
	$(".fadeSlide").delay(5000).animate({
		opacity: 0.9
	}, 1000, function() {});
	
	$( "body" ).on( "mouseover", ".fadeSlide", function() {
		if($(this).hasClass('active')) { return false;}
		else {
			$(this).addClass('active');
			$(this).animate({
				opacity: 0
			}, 1000, function() {
				$(this).delay(3000).animate({
			opacity: 0.9
				}, 1000, function() { $(this).removeClass('active'); });
			});
		}
	});

	


	
});


function blinkButton() { 
	$('.close a').animate({opacity: 1}, 800, function() {
		$(this).delay(200).animate({opacity: 0.4}, 800, function() { { blinkButton();} });
	});
}