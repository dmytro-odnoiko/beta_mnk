// init Isotope
var $grid = $('.zd_files').isotope({
  itemSelector: '.zd_report',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // years filters
  year2016: function() {
    var number = $(this).find('.year').text();
    return parseInt( number, 10 ) == 2016;
  },
  year2017: function() {
    var number = $(this).find('.year').text();
    return parseInt( number, 10 ) == 2017;
  },
  year2018: function() {
    var number = $(this).find('.year').text();
    return parseInt( number, 10 ) == 2018;
  },
  // show if name ends with -ium
  kvl: function() {
    var name = $(this).find('.name').text();
    return name.match( /КВЛ$/ );
  }
};

// bind filter button click
$('.zd_filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
