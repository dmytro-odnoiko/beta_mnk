$(document).ready(function() {

   $('.po-link').popover({
      trigger: 'click',
      html: true, // must have if HTML is contained in popover

      // get the title and conent
      title: function() {
         return $("body").find('.po-title').html();
      },
      content: function() {
         return $("body").find('.po-body').html();
      },

      container: 'body',
      placement: 'bottom',
      offset: '0, 25'

   });

});
