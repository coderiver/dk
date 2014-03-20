$(document).ready(function() {

    if ($(".js-counter").length) {
        $(".js-counter").countdown({
            until: new Date(2014, 3, 22, 23, 55),
            format: 'dhm',
            compact: true,
            layout: '{d<}<div class="counter__d"><span>{dn} {dl}</span></div>{d>}{h<}<div class="counter__h"><span>{hn} {hl}</span></div>{h>}' + 
            '{m<}<div class="counter__m"><span>{mn} {ml}</span></div>{m>}'
        });
    }

    $(".js-target").on("click", function (){
	 	var el = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $("."+el).offset().top
        }, 500);
	 	return false;
    });
    $(".js-to-reg").on("click", function (){
	 	$(".js-reg .input-wrap").first().find("input").focus();
	 	return false;
    });

    $(".js-collapse-title").on("click", function (){
	 	$(this).toggleClass("is-inactive");
	 	$(this).parent().next().slideToggle("fast");
	 	return false;
    });

});