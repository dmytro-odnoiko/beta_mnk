// facebook widget true resize by zvirDev
function windowSize() {

   var link1 = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmnk.org.ua%2F&tabs=timeline&width=',
      link2 = '&height=',
      link3 = '&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId',
      widgetWidth_xl = 500,
      widgetWidth_lg = 435,
      widgetWidth_md = 315,
      widgetWidth_sm = 480,
      widgetWidth_xs = 0,
      widgetHeight_xl = 525,
      widgetHeight_lg = 435,
      widgetHeight_md = 315,
      widgetHeight_sm = 480,
      widgetHeight_xs = 480;

   if ($(window).width() >= '1200') {
      // console.log("B4 size: Extra large");
      $("#zd_fb_widget > iframe").prop('width', widgetWidth_xl);
      $("#zd_fb_widget > iframe").prop('height', widgetHeight_xl);
      $("#zd_fb_widget > iframe").prop('src', link1+widgetWidth_xl+link2+widgetHeight_xl+link3);
   }
   if ($(window).width() >= '992' && $(window).width() <= '1199') {
      // console.log("B4 size: Large");
      $("#zd_fb_widget > iframe").prop('width', widgetWidth_lg);
      $("#zd_fb_widget > iframe").prop('height', widgetHeight_lg);
      $("#zd_fb_widget > iframe").prop('src', link1+widgetWidth_lg+link2+widgetHeight_lg+link3);
   }
   if ($(window).width() >= '768' && $(window).width() <= '991') {
      // console.log("B4 size: Medium");
      $("#zd_fb_widget > iframe").prop('width', widgetWidth_md);
      $("#zd_fb_widget > iframe").prop('height', widgetHeight_md);
      $("#zd_fb_widget > iframe").prop('src', link1+widgetWidth_md+link2+widgetHeight_md+link3);
   }
   if ($(window).width() >= '576' && $(window).width() <= '767') {
      // console.log("B4 size: Small");
      $("#zd_fb_widget > iframe").prop('width', widgetWidth_sm);
      $("#zd_fb_widget > iframe").prop('height', widgetHeight_sm);
      $("#zd_fb_widget > iframe").prop('src', link1+widgetWidth_sm+link2+widgetHeight_sm+link3);
   }
   if ($(window).width() <= '575') {
      // console.log("B4 size: Extra small");
      widgetWidth_xs = $(window).width() - 60;
      $("#zd_fb_widget > iframe").prop('width', widgetWidth_xs);
      $("#zd_fb_widget > iframe").prop('height', widgetHeight_xs);
      $("#zd_fb_widget > iframe").prop('src', link1+widgetWidth_xs+link2+widgetHeight_xs+link3);
   }
}
$(window).on('load resize', windowSize);
