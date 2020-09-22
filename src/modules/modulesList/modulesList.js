const moveBackgrounds = () => {
  $('.modulesList__item').each(( i, el ) => {
    const $el = $(el);
    $el.css('background-position', `100% -${$el.position().top}px`);
  });
};
moveBackgrounds();
$(window).on('resize', moveBackgrounds);

const activeClass = 'modulesList__item--active';
$('.modulesList__header').on('click', function ( e ) {
  var $item = $(e.delegateTarget).parent();
  if ($item.hasClass(activeClass)) {
    $item.find('.modulesList__body').css('max-height', 0);
  } else {
    var $text = $item.find('.modulesList__inner');
    $item.find('.modulesList__body').css('max-height', $text.outerHeight());
  }
  $item.toggleClass(activeClass);
});

