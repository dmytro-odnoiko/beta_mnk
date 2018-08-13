$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#zd_scroll_up').fadeIn();
        } else {
            $('#zd_scroll_up').fadeOut();
        }
    });

    $('#zd_scroll_up').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});
