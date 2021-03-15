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



});





