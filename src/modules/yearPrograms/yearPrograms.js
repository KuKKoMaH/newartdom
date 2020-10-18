import ScrollReveal from "scrollreveal";

$('.yearPrograms__more button').on('click', () => {
  $('.yearPrograms__items').addClass('yearPrograms__items--active');
  $('.yearPrograms__more').hide();
  ScrollReveal().sync();
});

ScrollReveal().reveal('.yearPrograms__item', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});
