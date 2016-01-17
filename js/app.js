$('document').ready(function() {
	topNavClick();
});

function topNavClick() {
	$('.nav-click').click(function() {
		if ( !$(this).hasClass("active") ) {
			$('.nav-click').removeClass("active");
			$(this).addClass("active");
		}

		hideAllContent();

		if ( $(this).is('#nav-about') ) {
			$('#about-me-container').show();
		} else if ( $(this).is('#nav-projects') ) {
			$('#project-detail-container').show();
		} else if ( $(this).is('#nav-interests') ) {
			$('#interests-container').show();
		} else if ( $(this).is('#nav-other') ) {
			$('#other-work-container').show();
		} else {
			$('#contact-container').show();
		}
	});
}

function hideAllContent() {
	$('#project-detail-container').hide();
	$('#about-me-container').hide();
	$('#interests-container').hide();
	$('#other-work-container').hide();
	$('#contact-container').hide();
}