$(function() {
   $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 80)
         $('.navbar').stop().animate({
            'opacity': '0.6'
         }, 800);
      else
         $('.navbar').stop().animate({
            'opacity': '1'
         }, 0);
   });

   $('.navbar').hover(
      function(e) {
         var scrollTop = $(window).scrollTop();
         if (scrollTop != 0) {
            $('.navbar').stop().animate({
               'opacity': '1'
            }, 400);
         }
      },
      function(e) {
         var scrollTop = $(window).scrollTop();
         if (scrollTop != 0) {
            $('.navbar').stop().animate({
               'opacity': '0.6'
            }, 400);
         }
      }
   );
});
