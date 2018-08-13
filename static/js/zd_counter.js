


$(function() {
   // animate only when scroll to block
   var jqBarStatus = true;
   $(window).scroll(function() {
      var scrollEvent = ($(window).scrollTop() > ($('#kvl_camps_04').position().top - $(window).height()) - 60);
      if (scrollEvent && jqBarStatus) {
         jqBarStatus = false;
         // counter animation
         $('.counter-count').each(function () {
            $(this).prop('Counter', 0).animate({
               Counter: $(this).text()
            }, {
               duration: 5000,
               easing: 'swing',
               step: function (now) {
                  $(this).text(Math.ceil(now));
               }
            });
         });
      }
   });
});
