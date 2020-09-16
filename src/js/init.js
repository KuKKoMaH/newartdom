import Breakpoints  from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';
// import baron        from 'baron';
// import noUiSlider   from 'nouislider';
// import 'selectize';
import initSlider   from './initSlider';
import scriptLoader from './scriptLoader';

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
  });
});

initSlider('.gallery__slider', ( $wrapper ) => ({
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  autoHeight:    true,
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

const formatCurrency = ( value, separator ) => {
  if (separator === undefined) separator = '\u00A0';

  let rub = ('' + Math.floor(value)).replace(/./g, ( c, i, a ) => {
    return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? separator + c : c;
  }).trim();

  // let cop = value % 100;
  // if (cop < 10) cop = '0' + cop;

  // const isNegative = value < 0;

  return rub;
};

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
