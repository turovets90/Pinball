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


    $('.nav_tabs li ').each(function(){
        var tab_link=$(this).index();
        var tab_content=$('.tab_content .tab-pane').index();
        $(this).click(function(){
            console.log(tab_link);
            $('.nav_tabs li ').removeClass('act');
            $('.tab_content .tab_pane').removeClass('active');
            $(this).addClass('act');
            $('.tab_content .tab_pane').eq(tab_link).addClass('active');
        });
    });

    $('.game_item_box').each(function(){
        var game_item_box=$(this);
        var game_item_toggle=$(this).find('.game_item_toggle')
        var game_item_body=$(this).find('.game_item_body');

        $(game_item_toggle).click(function(){
            if($(game_item_body).is(':visible')){
                $(game_item_box).removeClass('active');
                $(this).text('Change');
            }else{
                $(game_item_box).addClass('active');
                $(this).text('Cancel');
            }
        });
    });

});





