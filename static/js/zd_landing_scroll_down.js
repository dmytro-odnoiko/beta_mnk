$(document).ready(function(){
    $("#zd_arrow_down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 63;
            // console.log("top:"+top);
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
