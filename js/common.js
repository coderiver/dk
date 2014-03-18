$(document).ready(function() {
	$(".js-tab-key").on("click", function(event){
		$(this).parent().children().removeClass("is-active");
		$(this).addClass("is-active");
		var left = $(this).position().left;
		$(this).parent().find(".js-anim-el").css({
			left: left
		});
		event.stopPropagation();
	});
	$(".js-anim-tab").each(function(){
		var left = $(this).find(".is-active").position().left;
		$(this).find(".js-anim-el").css({
			left: left
		});
	});

	function ui_slider() {
        $(".js-ui-slider").each(function(){
            var slider = $(this).find(".js-ui-slider-main");
            var min = $(this).attr("data-min");
            var max = $(this).attr("data-max");
            var ui_input = $(this).find(".js-ui-input");
            slider.slider({
                range: "min",
                max: 800000,
                step: 2000,
                value: 600000,
                slide: function( event, ui ) {
                    $(this).find(".ui-slider-handle").html("<span></span>");
                    var handle = $(this).find("span")
                    ui_input.val(ui.value);
                    handle.text(ui.value);
                }
            });
            $(this).find(".ui-slider-handle").html("<span></span>");
            var handle = $(this).find("span")
            handle.text(slider.slider( "values", 0 ));
            ui_input.val(slider.slider( "values", 0 ));
        });
    }
    ui_slider();
    function ui_slider_month() {
        $(".js-ui-slider-month").each(function(){
            var slider = $(this).find(".js-ui-slider-main");
            var min = $(this).attr("data-min");
            var max = $(this).attr("data-max");
            var ui_input = $(".js-ui-slider-select");
            slider.slider({
                range: "min",
                max: 36,
                step: 6,
                value: 12,
                slide: function( event, ui ) {
                    $(this).find(".ui-slider-handle").html("<span></span>");
                    var handle = $(this).find("span")
                    ui_input.text(ui.value);
                    handle.text(ui.value);
                }
            });
            $(this).find(".ui-slider-handle").html("<span></span>");
            var handle = $(this).find("span")
            handle.text(slider.slider( "values", 0 ));
            ui_input.text(slider.slider( "values", 0 ));
        });
    }
    ui_slider_month();

    $(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
    });

    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            $(this).find(".js-select-text").text(text);
            var id = $(this).find(".js-select-input").val();
            select_list.find("li").each(function(){
                if ($(this).attr("data-id") == id) {
                    text = $(this).text();
                    $(this).parents(".js-select").find(".js-select-text").text(text);
                }
            });
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
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

    function tab() {
       $(".js-tab").each(function(){
            var tab_link = $(this).find("a");
            var tab_item = $(this).find("li");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            tab_item.first().addClass("is-active");
            $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_item.removeClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.slideUp("fast");
                $(this).parents(".js-tab-group").find("."+index).slideDown("fast");
                return false;
          });
       });
  }
  tab();

    $(".js-nav-item a").on("click", function(){
        $(this).parent().toggleClass("is-active");
        $(".js-subnav").slideToggle("fast");
        return false
    });

    function radioKey() {
        $(".js-radio-key").each(function(){
            if ($(this).find(".js-radio-right input").attr("checked")) {
               $(this).find(".js-radio-right").addClass("is-active");
               $(this).addClass("is-active");
            }
            else {
                $(this).removeClass("is-active");
                $(this).find(".js-radio-left").addClass("is-active");
            }
        });
        $(".js-radio-item").on("click", function(){
            $(".js-radio-item").removeClass("is-active");
            $(this).addClass("is-active");
            if ($(".js-radio-left").hasClass("is-active")) {
                $(this).parent().removeClass("is-active");
            }
            else {
                $(this).parent().addClass("is-active");
            }
        });
    }
    radioKey();

    $(".js-nav-list-key").on("click", function(){
        $(".js-nav-list").slideToggle("fast");
        //$(".js-nav-list").toggleClass("is-active");
        $(this).toggleClass("is-active");
    });

    $("body").prepend( '<div class="tooltip js-tooltip"><div class="tooltip__in"></div></div>' );
    var tooltip = $(".js-tooltip");
    $(".js-tooltip-key").hover(
        function(){
            var left = $(this).offset().left;
            var bottom = $(window).height() - $(this).offset().top;
            var tooltip_html = $(this).attr("data-title");
            tooltip.css({
                left: left,
                bottom: bottom 
            });
            tooltip.find(".tooltip__in").html(tooltip_html).fadeIn("fast");
            tooltip.fadeIn("fast");
        },
        function() {
            tooltip.hide();
        }
    );
    tooltip.hover(
        function(){
            tooltip.show();
        },
        function() {
            tooltip.hide(); 
        }
    );


    function init_cycle() {
        if ($(".js-slider").length > 0) {

            $(".js-slider").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_1.cycle({
                    prev: prev_nav,
                    next: next_nav
                });
                slider_2.cycle();

                var slideshows = $(this).find('.js-slider-cycle').on('cycle-next cycle-prev', function(e, opts) {
                    // advance the other slideshow
                    slideshows.not(this).cycle('goto', opts.currSlide);
                });

                slider_2.find(".cycle-slide").click(function(){
                    var index = slider_2.data('cycle.API').getSlideIndex(this);
                    slideshows.cycle('goto', index);
                });
            });
        }
    }
    init_cycle();

});