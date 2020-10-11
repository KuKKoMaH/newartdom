const activeClass = 'form__item--active';

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

const updatePrice = () => {
  let price = 0;
  const type = $('[name="type"]:checked').val();
  if (type === 'custom') {
    $('input[name="course"]:checked').each(( i, el ) => {
      const courseConfig = window.formConfig.courses[el.value];
      if (!courseConfig || !courseConfig.price) return;
      price += courseConfig.price;
    });
  } else if (type === 'module') {
    $('input[name="module"]:checked').each(( i, el ) => {
      const moduleConfig = window.formConfig.modules[el.value];
      if (!moduleConfig || !moduleConfig.price) return;
      price += moduleConfig.price;
    });
  }
  window.totalPrice = price;
  $('.form__price').html(formatCurrency(price) + ' ₽');
};

const updateCourse = ( $checkbox ) => {
  var $item = $checkbox.parents('.form__item');
  if ($checkbox.prop('checked')) {
    var $text = $item.find('.form__inner');
    $item.find('.form__options').css('max-height', $text.outerHeight());
  } else {
    $item.find('.form__options').css('max-height', 0);
  }
  $item.toggleClass(activeClass);
};

$('input[name="course"]').on('change', ( e ) => {
  const $checkbox = $(e.delegateTarget);
  updateCourse($checkbox);
  updatePrice();
});
$('input[name="course"]:checked').each(( i, el ) => updateCourse($(el)));

const updateForm = ( type ) => {
  $('[name="module"]:checked').prop('checked', false);
  $('[name="course"]:checked')
    .prop('checked', false)
    .each(( i, el ) => updateCourse($(el)))
  ;
  if (type === 'custom') {
    $('[name="module"]').prop('disabled', true);
    $('[name="course"]').prop('disabled', false);
  } else if (type === 'module') {
    $('[name="module"]').prop('disabled', false);
    $('[name="course"]').prop('disabled', true);
  }
  updatePrice();
};

$('[name="type"]').on('change', ( e ) => {
  updateForm(e.delegateTarget.value);
});
// updateForm($('[name="type"]:checked').val());

$('[name="module"]').on('change', ( e ) => {
  const module = e.delegateTarget.value;
  const moduleConfig = window.formConfig.modules[module];
  $('[name="course"]').prop('checked', false);
  if (moduleConfig) {
    const { courses } = moduleConfig;
    if (Array.isArray(courses)) {
      for (let i = 0; i < courses.length; i++) {
        $('[name="course"][value="' + courses[i] + '"]').prop('checked', true);
      }
    }
  }
  $('[name="course"]').trigger('change');
  updatePrice();
});

updatePrice();
