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

	


	$( "body" ).on( "click", ".menu li a, .close a", function() {
		
		

		if($(this).hasClass("current")) { return false; }
		else {
			
			
		
			var url = $(this).attr('href');
			var geting = $.get( url );
			
			// Put the results in a div 
			geting.done(function( data ) {
				
				$( "#center .page-wrapper" ).addClass('oldPage');
				var content = $( data ).find( '#center .page-wrapper' ).addClass('newPage').css({'display':'none'});
				
				$( '#center' ).append( content );
				var contentHeight = $('.newPage').height();
				
				// Анимация блока
				$( "#center .oldPage" ).animate({
					opacity:0
				}, 500, function() {
					$('.oldPage').remove();
					$( "#center" ).animate({
							height: contentHeight
						}, 500, function() {
						$( ".newPage" ).fadeIn(500);
						$( "#center .page-wrapper" ).removeClass('newPage');
						//blinkButton();

						$(".fadeSlide").delay(5000).animate({
							opacity: 0.9
						}, 1000, function() {});

					});
									
				});
	
			});
			return false;
		}
	});
	blinkButton();
	
	
});


function blinkButton() { 
	$('.close a').animate({opacity: 1}, 800, function() {
		$(this).delay(200).animate({opacity: 0.4}, 800, function() { { blinkButton();} });
	});
}