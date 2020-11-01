import ScrollReveal from "scrollreveal";

$('.courses__more button').on('click', () => {
  $('.courses__items').addClass('courses__items--active');
  $('.courses__more').hide();
});

ScrollReveal().reveal('.courses__text, .courses__header, .courses__text2', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});

ScrollReveal().reveal('.courses__title', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  interval:   80,
});
