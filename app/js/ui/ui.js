$(document).ready(function() {
    var bg = function() {
        $('.banner').height($(window).height())
        $('.b-search').css({
            paddingTop: ($(window).height() - 220) / 2
        })
    }
    $(window).scroll(function() {
        if ($('.banner').length > 0) {
            if ($(window).scrollTop() > 110) {
                $("header .navbar").removeClass('navbar-t').addClass('navbar-a1')
            } else {
                $("header .navbar").addClass('navbar-t').removeClass('navbar-a1')
            }
        } else {
            if ($(window).scrollTop() > 110) {
                $("header .navbar").addClass('navbar-a2')
            } else {
                $("header .navbar").removeClass('navbar-a2')
            }
        }
    })

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

    $(document).on('mouseover', '[title!=""]',
        function() {
            $(this).tooltip('show');
        });
});
