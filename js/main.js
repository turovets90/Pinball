$(document).ready(function(){

    $('.hamburger').click(function () {
        $('header .main_menu').slideToggle();
        $(this).toggleClass('act');
        return false;
    });


    $('select.custom_select').select2({
        minimumResultsForSearch: -1
    });

    $('.switcher_wrapper').click(function(){
        $(this).parent().toggleClass('play-off');
    });


/*
    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        if(!$(e.target).closest(".top_header_menu.open").length){
            $(".top_header_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });


    $(".main_slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    if($('.partners_list .col').length > 6){
        $('.partners_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.partners_list .col').length > 2){
        $('.partners_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.partners_list .col').length > 2){
        $('.partners_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 991 && $('.partners_list .col').length > 3){
        $('.partners_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    }




 */


});





