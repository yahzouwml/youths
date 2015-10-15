$(document).ready(function() {
    var bg = function() {
        $('.banner').height($(window).height())
        $('.b-search').css({
            paddingTop: ($(window).height() - 220) / 2
        })
    }

    $(document).on('click', '.tags2 a', function() {
        $('#blog .active').removeClass('active')
        $(this).addClass('active')
    })

    bg()
    $(window).bind('resize', function() {
        bg()
    })

    $(document).on('mouseover', '.u-avatar', function() {
        $(this).siblings('.u-extend').fadeIn(500);
    });

    $(document).on('mouseout', '.u-avatar', function() {
        $(this).siblings('.u-extend').fadeOut(100);
    });

    $(document).on('mouseover', '[title!=""]', function() {
        $(this).tooltip('show');
    });

});
