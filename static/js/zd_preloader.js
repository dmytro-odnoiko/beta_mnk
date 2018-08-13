// document.body.onload = function () {
//   setTimeout(function () {
//     var preloader = document.getElementByID('page-preloader');
//     if ( !preloader.classList.contains('done')) {
//       preloader.classList.add('done');
//     }
//   }, 1000);
// }


$(window).on('load', function() {
   $preloader = $('.preloader'),
      $loader = $preloader.find('.loader');
   $loader.fadeOut();
   $preloader.delay(350).fadeOut('slow');
});
