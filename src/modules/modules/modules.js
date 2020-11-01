import ScrollReveal from "scrollreveal";

$('.modules__more button').on('click', () => {
  $('.modules__items').addClass('modules__items--active');
  $('.modules__more').hide();
  ScrollReveal().sync();
});

ScrollReveal().reveal('.modules__title', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
});

ScrollReveal().reveal('.modules__header, .modules__text', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});

ScrollReveal().reveal('.modules__item:nth-child(2n + 1) .modules__image, .modules__item:nth-child(2n) .modules__content', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.modules__item:nth-child(2n) .modules__image, .modules__item:nth-child(2n + 1) .modules__content', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .5,
  interval:   80,
});
