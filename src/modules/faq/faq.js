const activeClass = 'faq__item--active';
$('.faq__header span').on('click', function ( e ) {
  var $item = $(e.delegateTarget).parent().parent();
  if ($item.hasClass(activeClass)) {
    $item.find('.faq__body').css('max-height', 0);
  } else {
    var $text = $item.find('.faq__inner');
    $item.find('.faq__body').css('max-height', $text.outerHeight());
  }
  $item.toggleClass(activeClass);
});

// $('.coursesFaq__header').first().click();
