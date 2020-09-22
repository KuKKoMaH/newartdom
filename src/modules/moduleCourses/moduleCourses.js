const activeClass = 'moduleCourses__item--active';
$('.moduleCourses__header span').on('click', function ( e ) {
  var $item = $(e.delegateTarget).parent().parent();
  if ($item.hasClass(activeClass)) {
    $item.find('.moduleCourses__body').css('max-height', 0);
  } else {
    var $text = $item.find('.moduleCourses__inner');
    $item.find('.moduleCourses__body').css('max-height', $text.outerHeight());
  }
  $item.toggleClass(activeClass);
});
