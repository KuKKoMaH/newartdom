import ScrollReveal from "scrollreveal";

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

ScrollReveal().reveal('.faq__title, .faq__item', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.faq__formHeader, .faq__input, .faq__footer', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  interval:   80,
});
