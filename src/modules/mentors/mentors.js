import ScrollReveal from "scrollreveal";

ScrollReveal().reveal('.mentors__name, .mentors__description, .mentors__text', {
  distance:   '20px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.mentors__item:nth-child(2n + 1) .mentors__image', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .5,
  // interval:   1000,
});
ScrollReveal().reveal('.mentors__item:nth-child(2n) .mentors__image', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  // interval:   1000,
});
