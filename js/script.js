//SLIDERS

var splide = new Splide('.splide', {
	type: 'loop',
	direction: 'ttb',
	height: `420px`,
	perPage: 7,
	pagination: false,
	arrows: false,
	isNavigation: true,
	focus: 'center',
	updateOnMove: true,
	wheel: true,
	fixedHeight: 60,
});
splide.mount();
makesome('.splide');

splide.on('move', () => {
	makesome('.splide');
});
splide.on('moved', () => {
	makesome('.splide');
});
splide.on('dragging', e => {
	document.querySelectorAll('.splide .splide__slide').forEach(slide => slide.classList.remove('first', 'afterfirst'));
});

function makesome(parentSelector) {
	const current = document.querySelector(`${parentSelector} .splide__slide.is-active`),
		all = document.querySelectorAll(`${parentSelector} .splide__slide`);
	all.forEach(e => {
		e.classList.remove('first');
		e.classList.remove('afterfirst');
	});
	current.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('first');
	current.previousElementSibling.previousElementSibling.classList.add('afterfirst');
	current.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('first');
	current.nextElementSibling.nextElementSibling.classList.add('afterfirst');
}

var splideBlocks = new Splide('#bloks-slider', {
	// fixedWidth: 566,
	type: 'fade',
	// perPage: 1,
	pagination: false,
	arrows: false,
	// focus: 'center',
});
splideBlocks.sync(splide);

splideBlocks.mount();





const addon = document.querySelectorAll('.calculator__addon > div'),
	mainSlides = document.querySelectorAll('.calculator__type .splide__slide span'),
	typeS = document.querySelector('.calculator__type');

addon.forEach((list, key) => {
	list.classList.add(`splide${key + 1}`);
	new Splide(`.splide${key + 1}`, {
		type: 'loop',
		direction: 'ttb',
		height: '420px',
		perPage: 7,
		pagination: false,
		arrows: false,
		isNavigation: true,
		focus: 'center',
		updateOnMove: true,
		wheel: true,
		fixedHeight: 60,
	}).mount();
});

function hideList(collection) {
	collection.forEach(el => el.style.display = "none");
}
hideList(addon);

function showList(collection, i = 0) {
	collection[i].style.display = 'block';
}
showList(addon);

mainSlides.forEach(slide => {
	slide.addEventListener('click', checkIfClickedTargetOnItem);
});

function checkIfClickedTargetOnItem(e) {
	const target = e.target;

	//проверяем на target, чтобы отсеить элементы которые не имееют обьекта target 
	if (target && target.matches('span')) {
		hideList(addon);
		if (addon[target.getAttribute('data-i') - 1]) {
			if (addon[target.getAttribute('data-i') - 1].getAttribute('data-i') == target.getAttribute('data-i')) {
				addon[target.getAttribute('data-i') - 1].style.display = "initial";
			}
			typeS.classList.remove('alone');

		} else {
			typeS.classList.add('alone');
		}
	}
}

// splide2.on('move', () => {
// 	makesome('.splide2');
// });
// splide2.on('moved', () => {
// 	makesome('.splide2');
// });
// splide2.on('dragging', e => {
// 	document.querySelectorAll('.splide2 .splide__slide').forEach(slide => slide.classList.remove('first', 'afterfirst'));
// });

//SLIDERS

//MENU BURGER
$('.wrapper').addClass('loaded');
$('.icon-menu__item').click(function (event) {
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toggleClass('lock');
});

//INTERACTIVE BACKGROUND
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();

const tags = document.querySelector('.main-form__tags'),
  inputs = document.querySelectorAll('.main-form__input'),
  mainForm = document.querySelector('.main-form'),
  calculator = document.querySelector('.calculator'),
  blocks = document.querySelector('.calculator__blocks'),
  calculatorType = document.querySelector('.calculator__type'),
  eyes = document.querySelectorAll('.eye'),
  selectHeader = document.querySelector('.select-header'),
  selectTitle = document.querySelector('.select-header__title'),
  selectOptions = document.querySelectorAll('.select-header__option'),
  formCancel = document.querySelector('.buttons-main-form__button'),
  formSubmit = document.querySelector('.buttons-main-form__button[type="submit"]');

formCancel.addEventListener('click', e => {
  e.preventDefault();
  inputs.forEach(input => {
    input.style.boxShadow = 'initial';
  });
  mainForm.reset();
});

formSubmit.addEventListener('click', e => {
  e.preventDefault();
});


function checkInput(input, reg) {
  const innerInput = input.querySelector('input'),
    inputWarning = input.querySelector('.withError');


  innerInput.addEventListener('blur', e => {
    e.target.value = e.target.value.replace(/\s{1,}/g, ' ');

    if (innerInput.value == '') {
      input.style.boxShadow = 'initial';
    } else {
      if (e.target.value.match(reg)) {
        if (checkForSymbols(e.target.value) == true) {
          input.style.boxShadow = '#C73131 0px 0px 0px 2px inset';
        } else {
          input.style.boxShadow = 'initial';
        }
      } else {
        input.style.boxShadow = '#C73131 0px 0px 0px 2px inset';
        if (checkForSymbols(e.target.value) == true) {
          inputWarning.append(el);
          console.log('a');
        }
      }
      function checkForSymbols(str) {
        if (str.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/i)) {
          return true;
        }
      }
    }
  });
}


inputs.forEach(input => {
  const innerInput = input.querySelector('input');
  if (innerInput.getAttribute('data-input') == 'pass') {
    checkInput(input, /^.{7,20}$/);
  }
  if (innerInput.getAttribute('data-input') == 'tags') {
    checkInput(input, /^\D{7,14}$/);
  }
  if (innerInput.getAttribute('data-input') == 'title') {
    checkInput(input, /^\D{2,20}$/, 'write symbols beetwen 2-20');
  }
  if (innerInput.getAttribute('data-input') == 'company') {
    checkInput(input, /^.{2,30}$/);
  }
});

function calculatorMobileActions(calculator) {
  const questions = calculator.querySelectorAll('[data-question'),
    closeBtns = calculator.querySelectorAll('[data-close]');

  questions.forEach(question => {
    question.addEventListener('click', (e) => {
      blocks.style.visibility = 'visible';
      blocks.style.opacity = 1;
      calculatorType.style.overflow = 'hidden';
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      blocks.style.visibility = 'hidden';
      blocks.style.opacity = 0;
      calculatorType.style.overflow = 'auto';
    });
  });
}
calculatorMobileActions(calculator);

eyes.forEach(eye => {
  eye.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-eye')) {
      document.querySelector('[data-eyed]').type = 'password';
    } else {
      document.querySelector('[data-eyed]').type = 'text';
    }
    eyes.forEach(e => e.hidden = false);
    e.target.hidden = true;
  });

});


tags.addEventListener('click', e => {
  if (e.target.matches('img')) {
    e.target.parentElement.remove();
  }
});


function selectInit() {
  selectTitle.textContent = selectOptions[0].querySelector('span').textContent;
  selectTitle.style.backgroundColor = getComputedStyle(selectOptions[0].querySelector('span')).backgroundColor;
  selectTitle.addEventListener('click', e => {
    selectHeader.classList.toggle('active');
  });

  selectOptions.forEach(option => {
    option.addEventListener('click', e => {
      selectTitle.textContent = e.target.querySelector('span').textContent;
      selectTitle.style.backgroundColor = getComputedStyle(e.target.querySelector('span')).backgroundColor;
      selectHeader.classList.toggle('active');
    });
  });

  document.addEventListener('click', e => {
    if (e.target != selectTitle) {
      selectHeader.classList.remove('active');
    }
  });
}
selectInit();



