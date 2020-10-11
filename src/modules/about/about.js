$('.about__more').on('click', ( e ) => {
  $('.about__items').addClass('about__items--active');
  $(e.delegateTarget).hide();
});
