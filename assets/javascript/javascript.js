$(document).ready(function(){

    var headerHeight = $(".navbar").outerHeight();
    $(".nav-link").click(function(){
       
        var linkHref = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1500);
        
    });
});


	$(window).scroll(function() {
		$('#animate').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("bigEntrance");
			}
		}, 1500);
    });
    
    $(window).scroll(function() {
		$('#animate2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("expandOpen");
			}
		}, 1500);
    });
    
    $(window).scroll(function() {
		$('#card').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		}, 1500);
	});