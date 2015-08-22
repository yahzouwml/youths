$(document).ready(function() {
    $('#fullpage').fullpage();
    $('.banner').height(document.body.clientHeight)
    $('.b-search').css({
        paddingTop: (document.body.clientHeight - 420) / 2
    })
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
});
