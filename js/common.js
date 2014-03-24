$(document).ready(function() {

     $(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
    });

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

    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            //var text = select_list.find("li").first().text();
            //$(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.hide();
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.show();
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
            });
        });
    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

});