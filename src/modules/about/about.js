import ScrollReveal from "scrollreveal";

$('.about__more').on('click', ( e ) => {
  $('.about__items').toggleClass('about__items--active');
  $(e.delegateTarget).text($('.about__items').hasClass('about__items--active') ? 'СВЕРНУТЬ' : 'ПОДРОБНЕЕ');
  ScrollReveal().sync();
});

ScrollReveal().reveal('.about__text, .about__itemsText, .about__itemsHeader, .about__item', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});
