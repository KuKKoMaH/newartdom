import ScrollReveal from "scrollreveal";

ScrollReveal().reveal('.course__aside', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .5,
  interval:   80,
});
ScrollReveal().reveal('.course__text > *', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
  interval:   80,
});
