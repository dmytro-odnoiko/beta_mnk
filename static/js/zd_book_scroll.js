$(document).ready(function() {
  $("#zd_contents").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top - 130;
          $('body,html').animate({scrollTop: top}, 1500);
      });
});
