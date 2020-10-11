$('.header__hamburger').on('click', ( e ) => {
  e.preventDefault();
  $('.header__menu').addClass('header__menu--active');
});
$('.header__close, .header__menu a').on('click', ( e ) => {
  $('.header__menu').removeClass('header__menu--active');
});

// ===============================================================

const $header = $('.header');
const $search = $('.header__search');
const $searchInput = $('.header__search-input');
const searchActiveClass = 'header--search';
$search.on('click', ( e ) => {
  $header.toggleClass(searchActiveClass);
  if ($header.hasClass(searchActiveClass)) {
    setTimeout(() => $searchInput.focus(), 100);
  }
});

$('.header__search-close').on('click', ( e ) => {
  $search.removeClass(searchActiveClass);
});

$search.on('click', ( e ) => {
  if (!$(e.target).closest('.header__search-bar').length) {
    $search.removeClass(searchActiveClass);
  }
});

