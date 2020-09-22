const activeClass = 'form__item--active';

$('.form__item .checkbox input').on('change', ( e ) => {
  const $checkbox = $(e.delegateTarget);
  var $item = $checkbox.parents('.form__item');
  if ($checkbox.prop('checked')) {
    var $text = $item.find('.form__inner');
    $item.find('.form__options').css('max-height', $text.outerHeight());
  } else {
    $item.find('.form__options').css('max-height', 0);
  }
  $item.toggleClass(activeClass);
});
