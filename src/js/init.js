import Breakpoints  from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';
// import baron        from 'baron';
// import noUiSlider   from 'nouislider';
import 'selectize';
import initSlider   from './initSlider';
import scriptLoader from './scriptLoader';
import ScrollReveal from 'scrollreveal';
import paroller     from './paroller';

__webpack_public_path__ = window.JS_PUBLIC_PATH || '/js/';

Breakpoints({
  sm: {
    min: 0,
    max: 767,
  },
  md: {
    min: 768,
    max: 1299,
  },
  lg: {
    min: 1300,
    max: Infinity,
  },
});

$('.select').each(( i, el ) => {
  const $select = $(el);
  let inited = false;
  $select.selectize({
    maxItems:       1,
    dropdownParent: 'body',
  });
});

initSlider('.gallery__slider', ( $wrapper ) => ({
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  // autoHeight:    true,
  wrapperClass:  'gallery__items',
  slideClass:    'gallery__item',
  lazy:          {
    loadPrevNext: true,
  },
  navigation:    {
    prevEl: $wrapper.parents('.gallery').find('.nav__button--prev')[0],
    nextEl: $wrapper.parents('.gallery').find('.nav__button--next')[0],
  },
}), { sm: true, md: true, lg: true });


const $popupGalleries = $('.popupGallery');
if ($popupGalleries.length) {
  import('./initGallery').then(( { default: initGallery } ) => {
    $popupGalleries.each(( i, el ) => {
      const $el = $(el);
      initGallery({
        $items: $el.find('.popupGallery__item'),
      });
    });
  });
}


window.smoothscroll = new SmoothScroll('a[href*="#"]', { /*header: '.header__container'*/ });

$('.file').each(( i, el ) => {
  const $el = $(el);
  const $name = $el.find('.file__name');
  const originalText = $name.text();
  $el.find('input[type="file"]').on('change', function () {
    const files = $(this)[0].files;
    $name.text(files.length ? files[0].name : originalText);
  });
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");

const $share = $('.share');
if ($share.length) {
  scriptLoader('https://yastatic.net/share2/share.js', () => {
    Ya.share2('share', {
      theme: {
        bare: true,
      },
    });
  });
}

ScrollReveal({ cleanup: false, reset: false });

ScrollReveal().reveal('.title', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .5,
});

ScrollReveal().reveal('.animated > *', {
  distance:   '50px',
  origin:     'bottom',
  viewFactor: .5,
});


$('.cards').each(( i, el ) => {
  ScrollReveal().reveal($(el).find('.cards__item'), {
    distance:   '50px',
    origin:     'bottom',
    viewFactor: .5,
    interval:   80,
  });
});

paroller('.paroller');
