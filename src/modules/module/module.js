import ScrollReveal from "scrollreveal";

$('.module__more button').on('click', () => {
  $('.module__rows').addClass('module__rows--active');
  $('.module__more').hide();
  ScrollReveal().sync();
});

ScrollReveal().reveal('.module__info > *', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});

ScrollReveal().reveal('.module__row:not(.module__row--reverse) .module__aside', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.module__row--reverse .module__aside', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .5,
  interval:   80,
});
