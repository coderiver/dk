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

    $(".js-input-file input").on("change",function(){
        var val = $(this).val();
        $(this).parent().find(".js-input-file-text").text(val);
    });


    // function tab() {
    //    $(".js-tab").each(function(){
    //         var tab_link = $(this).find("a");
    //         var tab_item = $(this).find("li");
    //         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
    //         tab_cont.hide();
    //         tab_item.first().addClass("is-active");
    //         $(this).parents(".js-tab-group").find(".js-tab1").show();
    //         tab_link.on("click", function() {
    //             var index = $(this).attr("href");
    //             tab_item.removeClass("is-active");
    //             $(this).parent().addClass("is-active");
    //             tab_cont.hide();
    //             $(this).parents(".js-tab-group").find("."+index).show();
    //             return false;
    //       });
    //    });
    // }
    // tab();

    $(".js-edit-news").on("click", function(){
        $(this).hide();
        $(this).parents(".js-news").find(".js-news-text").attr("contenteditable","true").addClass("input input_textarea");
        $(this).parents(".js-news").find(".js-news-title").attr("contenteditable","true").addClass("input");
        $(this).parents(".js-news").find(".js-news-btn").removeAttr("hidden");
    });

    $(".js-tab").tabs({
        beforeLoad: function( event, ui ) {
            ui.jqXHR.error(function() {
              ui.panel.html(
                "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                "If this wouldn't be a demo." );
            });
        },
        activate: function(event, ui) { 
            window.location.hash=ui.newPanel.selector; 
        },
        fx: { height: 'toggle', duration: '500' }

    });  


});  