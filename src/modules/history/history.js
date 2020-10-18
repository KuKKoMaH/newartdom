import ScrollReveal from "scrollreveal";

ScrollReveal().reveal('.history__header, .history__text > *', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.history__aside', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  // interval:   1000,
});
