// Custom Scripts
// Custom scripts

// menu

const menu = document.querySelector('.menu');
const mob = document.querySelector('.mob');
const body = document.querySelector('.main__body');

menu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
  body.classList.toggle('locked');
  mob.classList.toggle('active');

  e.stopPropagation();

  document.addEventListener('click', (e) => {
    if(!e.target.closest('.mob')) {
      menu.classList.remove('active');
      body.classList.remove('locked');
      mob.classList.remove('active');
    }
  });
});

const connection = document.querySelectorAll('.connection')
connection.forEach(item => {
  const trigger = document.querySelectorAll('.btn-hidden')
  const connectionClose = item.querySelector('.connection__close')

  trigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      item.classList.add('active');
      body.classList.add('hidden');

      e.stopPropagation();
    })
  })
  connectionClose.addEventListener('click', () => {
    item.classList.remove('active')
    body.classList.remove('hidden');
  });
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.connection')) {
      item.classList.remove('active')
      body.classList.remove('hidden');
    }
  });
});

// Swiper

const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  spaceBetween: 19,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    700: {
      slidesPerView: 1,
    },

    800: {
      slidesPerView: 4,
    },

  }
});

// slider Main

const sliderImgMain = document.querySelector('.slider__img-main');
const sliderImgSecondary = document.querySelectorAll('.slider__img-secondary');

sliderImgSecondary.forEach(item => {
  item.addEventListener('click', (e) => {
    let self = e.target;
    let srcValue = self.getAttribute('src');

    sliderImgMain.src = srcValue;
  })
})


// modal

function modal(trigger, modal) {

  trigger = document.querySelectorAll(trigger),
   modal = document.querySelector(modal)

  const modalBackgound = modal.querySelector('.modal__backgound');
  const btnClose = modal.querySelector('.modal-close');
  const body = modal.closest('.main__body');

  trigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      modalBackgound.classList.add('active');
      body.classList.add('locked');

      e.stopPropagation();
    });
  });
  btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
    modalBackgound.classList.remove('active');
    body.classList.remove('locked');

  })
  modalBackgound.addEventListener('click', () => {
    modal.classList.remove('active');
    modalBackgound.classList.remove('active');
    body.classList.remove('locked');
  })

}

modal('.btn-modal-tel', '.modal-tel');
modal('.btn-modal-record', '.modal-record');
modal('.btn-modal-question', '.modal-question');
modal('.btn-modal-rent', '.modal-rent');

// accordion

function accordion(accordionWrap) {

accordionWrap = document.querySelectorAll(accordionWrap);

  accordionWrap.forEach(item => {
    item.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let content =  self.querySelector('.accordion__content');
      let arrow =  self.querySelector('.accordion-arrow');

      self.classList.toggle('active');

      if (self.classList.contains('active')) {
        arrow.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '';
        arrow.classList.remove('active');
      }
    });
  });
}

accordion('.accordion__wrap');

// submit

const form = document.querySelectorAll('.form');

form.forEach(form => {
  const btnSubmit = form.querySelector('.btn-form');
  const input = form.querySelectorAll('.form-input');
  const inputCheck = form.querySelectorAll('.form-input-check');
  const checkLabel = form.querySelectorAll('.form-check-label');
  const formSelect = form.querySelectorAll('.form-select-btn');
  const modalBack = document.querySelectorAll('.modal__back');
  const chargerBack = document.querySelectorAll('.charger__back');


  const regExpName = /^[a-z0-9_-]{3,16}$/;
  const regExpUserName = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/

  const submit = () => {
    input.forEach(input => {
      const modalInner = form.closest('.modal__inner');

      formSelect.forEach(select => {
        inputCheck.forEach(check => {
          if(
            input.value != '' &&
            select.value != '' &&
            check.checked
            ) {
              if (modalInner == null) return
              modalInner.classList.add('inactive');
              modalBack.forEach(item => {
                item.classList.add('active');
              })
          } else {
            if (modalInner == null) return
            modalInner.classList.remove('inactive');
            modalBack.forEach(item => {
              item.classList.remove('active');
            })

          }
        })

      })
      inputCheck.forEach(check => {
        if(
          input.value != '' &&
          check.checked
          ) {
            if (modalInner == null) return

            modalInner.classList.add('inactive');
            modalBack.forEach(item => {
              item.classList.add('active');
            })
        } else {
          if (modalInner == null) return

          modalInner.classList.remove('inactive');
          modalBack.forEach(item => {
            item.classList.remove('active');
          })
        }
      })
    })
    function reload() {
      modalBack.forEach(item => {
        if(item.classList.contains('active')) {
          location.reload()
        }
      })
    }
    setTimeout(reload, 2000);
  }

  const submitFormCharger = () => {
    input.forEach(input => {
      const chargerWrap = form.closest('.charger__wrap');

      inputCheck.forEach(check => {
        if(
          input.value != '' &&
          check.checked
          ) {
          if (chargerWrap == null) return
            chargerWrap.classList.add('inactive');
            chargerBack.forEach(item => {
              item.classList.add('active');
            })
        } else {
          if (chargerWrap == null) return
          chargerWrap.classList.remove('inactive');
          chargerBack.forEach(item => {
            item.classList.remove('active');
          })
        }
      })
    })

    function reload() {
      chargerBack.forEach(item => {
        if(item.classList.contains('active')) {
          location.reload()
        }
      })
    }
    setTimeout(reload, 2000);
  }

  const validate = (elem) => {
    if(elem.value != '') {

      elem.classList.remove('blank');
    }

    if (elem.name === "username") {
      if(!regExpUserName.test(elem.value) && elem.value !== '') {
        elem.value = '';
        elem.placeholder = 'Введите коректное имя';
        elem.classList.add('blank');
      }
    }
    if (elem.name === "name") {
      if(!regExpName.test(elem.value) && elem.value !== '') {
        elem.value = '';
        elem.placeholder = 'Введите коректное имя';
        elem.classList.add('blank');
      }
    }
  };

  inputCheck.forEach(check => {
    check.addEventListener('change', () => {

      if(check.checked) {
        checkLabel.forEach(label => {
          label.classList.remove('inactive');
        })
      } else {
        checkLabel.forEach(label => {
          label.classList.add('inactive');
        })
      }

      input.forEach(input => {
        formSelect.forEach(select => {
          if(
            check.checked &&
            input.value != '' &&
            select.value != ''
            ) {
              btnSubmit.classList.remove('inactive')
          } else {
            btnSubmit.classList.add('inactive')

          }
        })
      })
      input.forEach(input => {
        if(
          check.checked &&
          input.value != ''
          ) {
          btnSubmit.classList.remove('inactive')
        } else {
          btnSubmit.classList.add('inactive')
        }
      });
    });
  });

  const maskPhone = () => {
    const inputsPhone = document.querySelectorAll('input[name="phone"]');

    inputsPhone.forEach(input => {
      let keyCode;

      const mask = (e) => {
        e.keyCode && (keyCode = e.keyCode);
        let pos = input.selectionStart;

        if(pos < 3) {
          e.preventDefault();
        }

        let matrix = '+380 (__) ___ ____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = input.value.replace(/\D/g, ''),
          newValue = matrix.replace(/[_\d]/g, (a) => {
            if(i < val.length) {
              return val.charAt(i++) || def.charAt(i);
            } else {
              return a;
            }
          });
        i = newValue.indexOf('_');

        if (i != -1) {
          i < 5 && (i = 3);
          newValue = newValue.slice(0, i);
        }

        let reg = matrix
          .substr(0, input.value.length)
          .replace(/_+/g, (a) => {
            return '\\d{1,' + a.length + '}';
          })
          .replace(/[+()]/g, '\\$&');
        reg = new RegExp('^' + reg + '$');
        if (
          !reg.test(input.value)||
          input.value.length < 6 ||
          (keyCode > 47 && keyCode < 58)
        ) {
          input.value = newValue;
        }
        if(e.type = 'blur' && input.value.length < 6) {
          input.value = '';
        }
      };

      input.addEventListener('input', mask, false);
      input.addEventListener('focus', mask, false);
      input.addEventListener('blur', mask, false);
      input.addEventListener('keydown', mask, false);
    });
  };
  maskPhone()

  input.forEach(input => {
    input.addEventListener('blur', () => {
      validate(input);
    })
  })

  const phoneInput = form.querySelectorAll('input[name="phone"]');
  phoneInput.forEach(phone => {
    phone.addEventListener('blur', () => {

      if (phone.value.length < 18) {
        phone.value = '';
        phone.placeholder = 'Введите коректый номер телефона';
        phone.classList.add('blank');
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    input.forEach(input => {
      if(input.value == '') {
        input.classList.add('blank')
        btnSubmit.classList.add('inactive');

        if(input.name === 'username') {
          input.placeholder = 'Пожалуйста введите имя';
        }
        if(input.name === 'name') {
          input.placeholder = 'Пожалуйста введите имя';
        }
        if(input.name === 'phone') {
          input.placeholder = 'Пожалуйста введите телефон';

        }
        if(input.name === 'place') {
          input.placeholder = 'Пожалуйста введите текст сообщения';
        }

      } else {
        input.classList.remove('blank');
        btnSubmit.classList.remove('inactive');
      }
    });

    formSelect.forEach(select => {
      const selectWrapper = select.parentNode;
      if(select.value === '') {
        select.classList.add('inactive');
        selectWrapper.classList.add('inactive');

      } else {
        select.classList.remove('inactive');
        selectWrapper.classList.remove('inactive');
      }
    });

    inputCheck.forEach(check => {
      if (!check.checked) {
        checkLabel.forEach(label => {
          label.classList.add('inactive')
        })
      }
    });

    submit();
    submitFormCharger();
  });
})


// Select Menu

const selectWrapper = document.querySelectorAll('.form-select-wrapper');

selectWrapper.forEach(dropDownWrapper => {
  const formTrigger = dropDownWrapper.querySelector('.form-select-btn');
  const formList = dropDownWrapper.querySelector('.form-select-list');
  const selectItem = dropDownWrapper.querySelectorAll('.form-select-item');

  formTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    formList.classList.toggle('active');
    dropDownWrapper.classList.toggle('active');
  })

  selectItem.forEach(item => {
    item.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let itemText = self.innerText;
      const itemData = self.dataset.value;

      formTrigger.innerText = itemText;
      formTrigger.value = itemData;

      formList.classList.remove('active');
      dropDownWrapper.classList.remove('active');

      formTrigger.classList.remove('inactive');
      dropDownWrapper.classList.remove('inactive');

      selectItem.forEach(item => {
        item.classList.remove('inactive');
        formTrigger.classList.remove('inoperative');
      });

      if(formTrigger.innerText === itemText) {
        item.classList.add('inactive');
      }
    });
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.form-select-wrapper')) {
      formList.classList.remove('active');
      formTrigger.classList.remove('active');
      dropDownWrapper.classList.remove('active');
    }
  });
});



