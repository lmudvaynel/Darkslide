$(document).ready(function() {

	$('.displaylink').bind('click', function() {
	  $('.contentDiv').hide();
	  $('.displaylink').removeClass('active');
		$(this).addClass('active');
        var x = $(this).attr('targetDiv');
	  $('#' + x).show();
	});

});
